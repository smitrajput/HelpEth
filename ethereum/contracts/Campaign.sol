pragma solidity ^0.4.17;


contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(string chooseCategory, string title, uint minimum, string description) public {
        address newCampaign = new Campaign(chooseCategory, title, minimum, msg.sender, description);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}


contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;           //automatically creates a manager() to access this variable
    uint public minimumContribution;
    string public chooseCategory;
    string public title;
    string public details;
    mapping(address => bool) public approvers;
    uint public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(string category, string titl,
                      uint minimum, address creator, string detail) public {
        manager = creator;
        minimumContribution = minimum;
        chooseCategory = category;
        title = titl;
        details = detail;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted {
        Request storage request = requests[index];

        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns(string, string, string, uint, uint, uint, uint, address) {
        return (
            chooseCategory,
            title,
            details,
            minimumContribution,
            this.balance,
            approversCount,
            requests.length,
            manager
        );
    }

    function getRequestsCount() public view returns(uint) {
        return requests.length;
    }

}
