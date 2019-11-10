pragma solidity >=0.5.0;

/**
    This token allows entry into rooms.
**/

//Importing openzeppelin-solidity ERC-721 implemented Standard
import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721.sol";

// RoomToken Contract declaration inherits the ERC721 openzeppelin implementation
contract RoomToken is ERC721 {

    

    // name: Is a short name to your token
    // symbol: Is a short string like 'USD' -> 'American Dollar'
   
    
    string public constant name = "Room Entry Token";
    string public constant symbol = "RET";

    // mapping the token key to Room struct to find out roomName and roomOwner
    mapping(uint256 => string) private tokenKeyToRoomName;
    
    // mapping room name to list of room owners (allow room to have more than one owner)
    mapping(string => address[]) private roomNameToOwners;
    
    // mapping room to array of token id's issued for that room
    mapping(string => uint256[]) private roomNameToTokenID;
    
    // mapping with key (made from room owner and room name) to bool
    mapping(uint256 => bool) private isRoomOwner;
    
    // mapping the TokenId to price 
    mapping(uint256 => uint256) public roomTokenFee; 
    
    address private contractOwner;              // Account used to deploy contract
    
    mapping(string => bool) private isRoomRegistered;   // register a room before adding owner
    uint256             private numRooms;           // track how many rooms registered
    
    /*******************************************************************************************/
    /*                   CONTRACT CONSTRUCTOR                                      */
    /********************************************************************************************/
    
    constructor () public
    {
        contractOwner = msg.sender;
    }
    /********************************************************************************************/
    /*                   PERMISSION GRANTING FUNCTIONS                                          */
    /********************************************************************************************/
   
   

    
    
    // Check that function caller is room owner
    // string memory for internal functions, string calldata for external
    
    function callerIsRoomOwner(string memory roomName) 
                                                        internal 
                                                        view
                                                        returns(bool)
    {
        uint256 roomKey = getRoomKey(msg.sender, roomName);
        return isRoomOwner[roomKey];
    }
    
    /**
        Register room adds a room name to the list of available rooms.
        
        Should this function be restricted to contract owner?
    **/
    function registerRoom(string calldata roomName) external
    {
        require(isRoomRegistered[roomName] ==false, "Room is already registered.");
        isRoomRegistered[roomName] = true;   // register a room before adding owner
        
        // increment how many rooms registered
        // NOTE: is there a maximum number for this? 
        // NOTE 2: Can change to use SafeMath for uint256
        numRooms = numRooms + 1;        
                    
    
    }
    
    /**
        Add an owner to a room, msg.sender is the desired owner.
        This function is used to open a room to participants.
    **/
    function addRoomOwner(string calldata roomName) external 
    {   // use require if room can only have one owner
        
        require(isRoomRegistered[roomName], "Room must be registered first before adding owner.");
        //require(roomNameToOwners[roomName].length == 1, "Room can only have one owner.");
        
        roomNameToOwners[roomName].push(msg.sender);
        
        uint256 roomKey = getRoomKey(msg.sender, roomName);
        isRoomOwner[roomKey] = true;  
        
    }
    
    
    // Returns whether room has owner(s)
    function roomHasOwner(string calldata roomName) 
                                                    external 
                                                    view 
                                                    returns(bool)
    {
        // this value is 1 if room has 1 owner
        return roomNameToOwners[roomName].length > 0;
    
    }
    
    
    /********************************************************************************************/
    /*                                 MODIFIERS                                                */
    /********************************************************************************************/
    
     /**
        Modifier that requires the "ContractOwner" account to be the function caller
    */
    modifier requireContractOwner()
    {
        require(msg.sender == contractOwner, "Caller is not contract owner");
        _;
    }
    
    // Modifier that calls callerIsRoomOwner
    modifier requireCallerIsRoomOwner(string memory roomName)
    {
        require(callerIsRoomOwner(roomName), "Caller is not room owner.");
        _;
   
    }
    /********************************************************************************************/
    /*                                 UTILITY FUNCTIONS                                        */
    /********************************************************************************************/
    
    // Takes room name and room owner addresses, returns a key
    function getRoomKey
                        (
                            address         roomOwner,
                            string memory   roomName
                        ) 
                        internal
                        pure
                        returns(uint256)
    {
         bytes32 key = keccak256(abi.encodePacked(roomOwner, roomName));
         return uint256(key);
    }
    
    // Creates a token id, index is the i-th token minted for this room
    function getTokenId
                        (
                            address         roomOwner,
                            string memory   roomName,
                            uint256         index
                        ) 
                        internal
                        pure
                        returns(uint256)
    {
         bytes32 key = keccak256(abi.encodePacked(roomOwner, roomName, index));
         return uint256(key);
    }   
    
                                
    function viewNumberOfRooms() external view returns(uint256)
    {
        return numRooms;
    }
    
    // Return number of room owners for roomName
    function viewNumberOfRoomOwner(string calldata roomName)
                                                              external
                                                              view
                                                              returns(uint256)
    {
        return roomNameToOwners[roomName].length;
    }
    
    // Return number of participants in room (excludes number of room owners)
    function viewNumberOfTokensInRoom(string calldata roomName)
                                                                       external
                                                                       view
                                                                       returns(uint256)
    {
        return roomNameToTokenID[roomName].length;
    }
    
    /********************************************************************************************/
    /*                                 ROOM TOKEN RELATED FUNCTIONS                             */
    /********************************************************************************************/
   
    /**
        Room owner use this function to mint a token for their room.
        msg.sender mustbe room owner.
    **/
    function createRoomToken(string calldata _roomName, uint256 _index) 
                                                                external
                                                                requireCallerIsRoomOwner(_roomName)
    { 
    
        
        // get tokenId
        uint256 _tokenId = getTokenId(msg.sender, _roomName, _index);
        
        
        require(keccak256(abi.encodePacked(tokenKeyToRoomName[_tokenId]))!=keccak256(abi.encodePacked(_roomName)), "TokenID is not unique for this room; Token cannot be issued twice." );
        // map tokenId to Room struct so we know the roomOwner and roomName
        
        tokenKeyToRoomName[_tokenId] =  _roomName ;
        
        // give msg.sender this token
        _mint(msg.sender, _tokenId); // _mint assign with _tokenId to the sender address (ownership)
        roomNameToTokenID[_roomName].push(_tokenId);
    }

    /** 
        roomOwner use this function to indicate a room token with _tokenId is available for sale.
        Other room participants can use this function to sale their token too.
    **/
    
    function putRoomTokenForSale(uint256 _tokenId, uint256 _price) external {
        require(ownerOf(_tokenId) == msg.sender, "You can't sale a room token you don't owned");
        roomTokenFee[_tokenId] = _price;
    }


    // Function that allows you to convert an address into a payable address

    function _make_payable(address x) internal pure returns (address payable) {
        return address(uint160(x));
    }
    
    /**
        A person (msg.sender) wishing to enter a room buys token with _tokenId paying msg.value
    **/
    function buyRoomToken(uint256 _tokenId) external  payable {
        require(roomTokenFee[_tokenId] > 0, "The room token should be up for sale");
        uint256 roomCost = roomTokenFee[_tokenId];
        address ownerAddress = ownerOf(_tokenId);
        require(msg.value > roomCost, "You need to have enough Ether to enter room.");
        _transferFrom(ownerAddress, msg.sender, _tokenId); 
        address payable ownerAddressPayable = _make_payable(ownerAddress); // We need to make this conversion to be able to use transfer() function to transfer ethers
       
        ownerAddressPayable.transfer(roomCost);
        if(msg.value > roomCost) {
            msg.sender.transfer(msg.value - roomCost);
        }
        roomTokenFee[_tokenId] = 0; // set to 0 so token is no longer for sale
    }
    
    // Given tokenId, return roomName and roomOwner
    /**
    function lookUptokenIdToRoomName (address roomOwner, string calldata _roomName, uint256 _index) external view returns (string memory) {
        
        uint256 _tokenId = getTokenId(roomOwner, _roomName, _index);
        return tokenKeyToRoomName[_tokenId];
    }**/

    // Exchange room tokens
    function exchangeRoomTokens(uint256 _tokenId1, uint256 _tokenId2) external {
        //1. Passing to star tokenId you will need to check if the owner of _tokenId1 or _tokenId2 is the sender
        require(ownerOf(_tokenId1) == msg.sender || ownerOf(_tokenId2) == msg.sender, "Sender must be owner of _tokenId1 or _tokenId2." );
        
        //2. You don't have to check for the price of the token (star)
        //3. Get the owner of the two tokens (ownerOf(_tokenId1), ownerOf(_tokenId1))
        address owner1Address = ownerOf(_tokenId1);
        address owner2Address = ownerOf(_tokenId2);
        
        //4. Use _transferFrom function to exchange the tokens.
        _transferFrom(owner1Address, owner2Address, _tokenId1); 
        _transferFrom(owner2Address, owner1Address, _tokenId2);     
    }

    /**
        msg.sender transfers room token to address to1
    **/
    function transferToken(address _to1, uint256 _tokenId) external {
        //1. Check if the sender is the ownerOf(_tokenId)
        require(ownerOf(_tokenId) == msg.sender, "Sender must be token owner.");
        
        //2. Use the transferFrom(from, to, tokenId); 
        transferFrom(msg.sender, _to1, _tokenId);
    }

}
