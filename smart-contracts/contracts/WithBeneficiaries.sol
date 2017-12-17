pragma solidity ^0.4.17;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/payment/SplitPayment.sol";


contract WithBeneficiaries is Ownable, SplitPayment {
    function WithBeneficiaries(address[] _benefitiaries, uint256[] _shares)
        SplitPayment(_benefitiaries, _shares) public
    {
        addPayee(owner, 1);
    }

    function addBeneficiary(address _beneficiary, uint _share) public onlyOwner {
        addPayee(_beneficiary, _share);
    }

    function changeBeneficiaryShare(address _beneficiary, uint _newShare) external onlyOwner {
        uint oldShare = shares[_beneficiary];
        totalShares = totalShares.sub(oldShare).add(_newShare);
        shares[_beneficiary] = _newShare;
    }
}