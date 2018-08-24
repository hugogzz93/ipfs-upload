export const FileStorageAddress = "0x345ca3e014aaf5dca488057592ee47305d9b3e10";
export const FileStorageABI = {
  "contractName": "FileStorage",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "uploads",
      "outputs": [
        {
          "name": "ipfsHash",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "ipfsHash",
          "type": "string"
        }
      ],
      "name": "UploadRegistered",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "user",
          "type": "address"
        },
        {
          "name": "ipfsHash",
          "type": "string"
        },
        {
          "name": "tags",
          "type": "string[]"
        }
      ],
      "name": "addUpload",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506108de806100606000396000f300608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806386ab977c1461005c5780638da5cb5b14610085578063b7a34492146100b0575b600080fd5b34801561006857600080fd5b50610083600480360361007e91908101906105a1565b6100ed565b005b34801561009157600080fd5b5061009a6101e7565b6040516100a791906106d7565b60405180910390f35b3480156100bc57600080fd5b506100d760048036036100d29190810190610620565b61020c565b6040516100e49190610722565b60405180910390f35b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040805190810160405280848152602001838152509080600181540180825580915050906001820390600052602060002090600202016000909192909190915060008201518160000190805190602001906101889291906102de565b5060208201518160010190805190602001906101a592919061035e565b505050507f5f29831824cdfc2bf036b7bc8028751c07f4a9cb9c8abee7ebaf9ce5014ed67c83836040516101da9291906106f2565b60405180910390a1505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016020528160005260406000208181548110151561022757fe5b906000526020600020906002020160009150915050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102d45780601f106102a9576101008083540402835291602001916102d4565b820191906000526020600020905b8154815290600101906020018083116102b757829003601f168201915b5050505050905081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061031f57805160ff191683800117855561034d565b8280016001018555821561034d579182015b8281111561034c578251825591602001919060010190610331565b5b50905061035a91906103be565b5090565b8280548282559060005260206000209081019282156103ad579160200282015b828111156103ac57825182908051906020019061039c9291906102de565b509160200191906001019061037e565b5b5090506103ba91906103e3565b5090565b6103e091905b808211156103dc5760008160009055506001016103c4565b5090565b90565b61040c91905b8082111561040857600081816103ff919061040f565b506001016103e9565b5090565b90565b50805460018160011615610100020316600290046000825580601f106104355750610454565b601f01602090049060005260206000209081019061045391906103be565b5b50565b60006104638235610827565b905092915050565b600082601f830112151561047e57600080fd5b813561049161048c82610771565b610744565b9150818183526020840193506020810190508360005b838110156104d757813586016104bd88826104e1565b8452602084019350602083019250506001810190506104a7565b5050505092915050565b600082601f83011215156104f457600080fd5b813561050761050282610799565b610744565b9150808252602083016020830185838301111561052357600080fd5b61052e838284610851565b50505092915050565b600082601f830112151561054a57600080fd5b813561055d610558826107c5565b610744565b9150808252602083016020830185838301111561057957600080fd5b610584838284610851565b50505092915050565b60006105998235610847565b905092915050565b6000806000606084860312156105b657600080fd5b60006105c486828701610457565b935050602084013567ffffffffffffffff8111156105e157600080fd5b6105ed86828701610537565b925050604084013567ffffffffffffffff81111561060a57600080fd5b6106168682870161046b565b9150509250925092565b6000806040838503121561063357600080fd5b600061064185828601610457565b92505060206106528582860161058d565b9150509250929050565b61066581610807565b82525050565b6000610676826107fc565b80845261068a816020860160208601610860565b61069381610893565b602085010191505092915050565b60006106ac826107f1565b8084526106c0816020860160208601610860565b6106c981610893565b602085010191505092915050565b60006020820190506106ec600083018461065c565b92915050565b6000604082019050610707600083018561065c565b8181036020830152610719818461066b565b90509392505050565b6000602082019050818103600083015261073c81846106a1565b905092915050565b6000604051905081810181811067ffffffffffffffff8211171561076757600080fd5b8060405250919050565b600067ffffffffffffffff82111561078857600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156107b057600080fd5b601f19601f8301169050602081019050919050565b600067ffffffffffffffff8211156107dc57600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561087e578082015181840152602081019050610863565b8381111561088d576000848401525b50505050565b6000601f19601f83011690509190505600a265627a7a723058208511b712e22cf5c900d4566455526854bfeef88a32bcb8a5d58a4326c3d04ecc6c6578706572696d656e74616cf50037",
  "deployedBytecode": "0x608060405260043610610057576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806386ab977c1461005c5780638da5cb5b14610085578063b7a34492146100b0575b600080fd5b34801561006857600080fd5b50610083600480360361007e91908101906105a1565b6100ed565b005b34801561009157600080fd5b5061009a6101e7565b6040516100a791906106d7565b60405180910390f35b3480156100bc57600080fd5b506100d760048036036100d29190810190610620565b61020c565b6040516100e49190610722565b60405180910390f35b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040805190810160405280848152602001838152509080600181540180825580915050906001820390600052602060002090600202016000909192909190915060008201518160000190805190602001906101889291906102de565b5060208201518160010190805190602001906101a592919061035e565b505050507f5f29831824cdfc2bf036b7bc8028751c07f4a9cb9c8abee7ebaf9ce5014ed67c83836040516101da9291906106f2565b60405180910390a1505050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016020528160005260406000208181548110151561022757fe5b906000526020600020906002020160009150915050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156102d45780601f106102a9576101008083540402835291602001916102d4565b820191906000526020600020905b8154815290600101906020018083116102b757829003601f168201915b5050505050905081565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061031f57805160ff191683800117855561034d565b8280016001018555821561034d579182015b8281111561034c578251825591602001919060010190610331565b5b50905061035a91906103be565b5090565b8280548282559060005260206000209081019282156103ad579160200282015b828111156103ac57825182908051906020019061039c9291906102de565b509160200191906001019061037e565b5b5090506103ba91906103e3565b5090565b6103e091905b808211156103dc5760008160009055506001016103c4565b5090565b90565b61040c91905b8082111561040857600081816103ff919061040f565b506001016103e9565b5090565b90565b50805460018160011615610100020316600290046000825580601f106104355750610454565b601f01602090049060005260206000209081019061045391906103be565b5b50565b60006104638235610827565b905092915050565b600082601f830112151561047e57600080fd5b813561049161048c82610771565b610744565b9150818183526020840193506020810190508360005b838110156104d757813586016104bd88826104e1565b8452602084019350602083019250506001810190506104a7565b5050505092915050565b600082601f83011215156104f457600080fd5b813561050761050282610799565b610744565b9150808252602083016020830185838301111561052357600080fd5b61052e838284610851565b50505092915050565b600082601f830112151561054a57600080fd5b813561055d610558826107c5565b610744565b9150808252602083016020830185838301111561057957600080fd5b610584838284610851565b50505092915050565b60006105998235610847565b905092915050565b6000806000606084860312156105b657600080fd5b60006105c486828701610457565b935050602084013567ffffffffffffffff8111156105e157600080fd5b6105ed86828701610537565b925050604084013567ffffffffffffffff81111561060a57600080fd5b6106168682870161046b565b9150509250925092565b6000806040838503121561063357600080fd5b600061064185828601610457565b92505060206106528582860161058d565b9150509250929050565b61066581610807565b82525050565b6000610676826107fc565b80845261068a816020860160208601610860565b61069381610893565b602085010191505092915050565b60006106ac826107f1565b8084526106c0816020860160208601610860565b6106c981610893565b602085010191505092915050565b60006020820190506106ec600083018461065c565b92915050565b6000604082019050610707600083018561065c565b8181036020830152610719818461066b565b90509392505050565b6000602082019050818103600083015261073c81846106a1565b905092915050565b6000604051905081810181811067ffffffffffffffff8211171561076757600080fd5b8060405250919050565b600067ffffffffffffffff82111561078857600080fd5b602082029050602081019050919050565b600067ffffffffffffffff8211156107b057600080fd5b601f19601f8301169050602081019050919050565b600067ffffffffffffffff8211156107dc57600080fd5b601f19601f8301169050602081019050919050565b600081519050919050565b600081519050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b8381101561087e578082015181840152602081019050610863565b8381111561088d576000848401525b50505050565b6000601f19601f83011690509190505600a265627a7a723058208511b712e22cf5c900d4566455526854bfeef88a32bcb8a5d58a4326c3d04ecc6c6578706572696d656e74616cf50037",
  "sourceMap": "60:718:0:-;;;280:50;8:9:-1;5:2;;;30:1;27;20:12;5:2;280:50:0;315:10;307:5;;:18;;;;;;;;;;;;;;;;;;60:718;;;;;;",
  "deployedSourceMap": "60:718:0:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;334:174;;8:9:-1;5:2;;;30:1;27;20:12;5:2;334:174:0;;;;;;;;;;;;;;;;;;;85:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;85:20:0;;;;;;;;;;;;;;;;;;;;174:43;;8:9:-1;5:2;;;30:1;27;20:12;5:2;174:43:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;334:174;412:7;:19;420:10;412:19;;;;;;;;;;;;;;;437:22;;;;;;;;;444:8;437:22;;;;454:4;437:22;;;412:48;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;412:48:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;471:32;488:4;494:8;471:32;;;;;;;;;;;;;;;;334:174;;;:::o;85:20::-;;;;;;;;;;;;;:::o;174:43::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;60:718::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;5:118:-1:-;;72:46;110:6;97:20;72:46;;;63:55;;57:66;;;;;147:696;;270:3;263:4;255:6;251:17;247:27;240:35;237:2;;;288:1;285;278:12;237:2;325:6;312:20;347:86;362:70;425:6;362:70;;;347:86;;;338:95;;450:5;475:6;468:5;461:21;505:4;497:6;493:17;483:27;;527:4;522:3;518:14;511:21;;580:6;613:1;598:239;623:6;620:1;617:13;598:239;;;706:3;693:17;685:6;681:30;730:43;769:3;757:10;730:43;;;725:3;718:56;797:4;792:3;788:14;781:21;;825:4;820:3;816:14;809:21;;655:182;645:1;642;638:9;633:14;;598:239;;;602:14;230:613;;;;;;;;852:434;;950:3;943:4;935:6;931:17;927:27;920:35;917:2;;;968:1;965;958:12;917:2;1005:6;992:20;1027:61;1042:45;1080:6;1042:45;;;1027:61;;;1018:70;;1108:6;1101:5;1094:21;1144:4;1136:6;1132:17;1177:4;1170:5;1166:16;1212:3;1203:6;1198:3;1194:16;1191:25;1188:2;;;1229:1;1226;1219:12;1188:2;1239:41;1273:6;1268:3;1263;1239:41;;;910:376;;;;;;;;1295:442;;1397:3;1390:4;1382:6;1378:17;1374:27;1367:35;1364:2;;;1415:1;1412;1405:12;1364:2;1452:6;1439:20;1474:65;1489:49;1531:6;1489:49;;;1474:65;;;1465:74;;1559:6;1552:5;1545:21;1595:4;1587:6;1583:17;1628:4;1621:5;1617:16;1663:3;1654:6;1649:3;1645:16;1642:25;1639:2;;;1680:1;1677;1670:12;1639:2;1690:41;1724:6;1719:3;1714;1690:41;;;1357:380;;;;;;;;1745:118;;1812:46;1850:6;1837:20;1812:46;;;1803:55;;1797:66;;;;;1870:745;;;;2049:2;2037:9;2028:7;2024:23;2020:32;2017:2;;;2065:1;2062;2055:12;2017:2;2100:1;2117:53;2162:7;2153:6;2142:9;2138:22;2117:53;;;2107:63;;2079:97;2235:2;2224:9;2220:18;2207:32;2259:18;2251:6;2248:30;2245:2;;;2291:1;2288;2281:12;2245:2;2311:63;2366:7;2357:6;2346:9;2342:22;2311:63;;;2301:73;;2186:194;2439:2;2428:9;2424:18;2411:32;2463:18;2455:6;2452:30;2449:2;;;2495:1;2492;2485:12;2449:2;2515:84;2591:7;2582:6;2571:9;2567:22;2515:84;;;2505:94;;2390:215;2011:604;;;;;;2622:366;;;2743:2;2731:9;2722:7;2718:23;2714:32;2711:2;;;2759:1;2756;2749:12;2711:2;2794:1;2811:53;2856:7;2847:6;2836:9;2832:22;2811:53;;;2801:63;;2773:97;2901:2;2919:53;2964:7;2955:6;2944:9;2940:22;2919:53;;;2909:63;;2880:98;2705:283;;;;;;2995:110;3068:31;3093:5;3068:31;;;3063:3;3056:44;3050:55;;;3112:300;;3214:39;3247:5;3214:39;;;3270:6;3265:3;3258:19;3282:63;3338:6;3331:4;3326:3;3322:14;3315:4;3308:5;3304:16;3282:63;;;3377:29;3399:6;3377:29;;;3370:4;3365:3;3361:14;3357:50;3350:57;;3194:218;;;;;;3419:292;;3517:35;3546:5;3517:35;;;3569:6;3564:3;3557:19;3581:63;3637:6;3630:4;3625:3;3621:14;3614:4;3607:5;3603:16;3581:63;;;3676:29;3698:6;3676:29;;;3669:4;3664:3;3660:14;3656:50;3649:57;;3497:214;;;;;;3718:193;;3826:2;3815:9;3811:18;3803:26;;3840:61;3898:1;3887:9;3883:17;3874:6;3840:61;;;3797:114;;;;;3918:382;;4074:2;4063:9;4059:18;4051:26;;4088:61;4146:1;4135:9;4131:17;4122:6;4088:61;;;4197:9;4191:4;4187:20;4182:2;4171:9;4167:18;4160:48;4222:68;4285:4;4276:6;4222:68;;;4214:76;;4045:255;;;;;;4307:273;;4431:2;4420:9;4416:18;4408:26;;4481:9;4475:4;4471:20;4467:1;4456:9;4452:17;4445:47;4506:64;4565:4;4556:6;4506:64;;;4498:72;;4402:178;;;;;4587:256;;4649:2;4643:9;4633:19;;4687:4;4679:6;4675:17;4786:6;4774:10;4771:22;4750:18;4738:10;4735:34;4732:62;4729:2;;;4807:1;4804;4797:12;4729:2;4827:10;4823:2;4816:22;4627:216;;;;;4850:264;;5015:18;5007:6;5004:30;5001:2;;;5047:1;5044;5037:12;5001:2;5076:4;5068:6;5064:17;5056:25;;5104:4;5098;5094:15;5086:23;;4938:176;;;;5121:255;;5261:18;5253:6;5250:30;5247:2;;;5293:1;5290;5283:12;5247:2;5337:4;5333:9;5326:4;5318:6;5314:17;5310:33;5302:41;;5366:4;5360;5356:15;5348:23;;5184:192;;;;5383:259;;5527:18;5519:6;5516:30;5513:2;;;5559:1;5556;5549:12;5513:2;5603:4;5599:9;5592:4;5584:6;5580:17;5576:33;5568:41;;5632:4;5626;5622:15;5614:23;;5450:192;;;;5649:88;;5726:5;5720:12;5710:22;;5704:33;;;;5744:92;;5825:5;5819:12;5809:22;;5803:33;;;;5843:128;;5923:42;5916:5;5912:54;5901:65;;5895:76;;;;5978:128;;6058:42;6051:5;6047:54;6036:65;;6030:76;;;;6113:79;;6182:5;6171:16;;6165:27;;;;6200:145;6281:6;6276:3;6271;6258:30;6337:1;6328:6;6323:3;6319:16;6312:27;6251:94;;;;6354:268;6419:1;6426:101;6440:6;6437:1;6434:13;6426:101;;;6516:1;6511:3;6507:11;6501:18;6497:1;6492:3;6488:11;6481:39;6462:2;6459:1;6455:10;6450:15;;6426:101;;;6542:6;6539:1;6536:13;6533:2;;;6607:1;6598:6;6593:3;6589:16;6582:27;6533:2;6403:219;;;;;6630:97;;6718:2;6714:7;6709:2;6702:5;6698:14;6694:28;6684:38;;6678:49;;;",
  "source": "pragma solidity ^0.4.23;\npragma experimental ABIEncoderV2;\n\ncontract FileStorage {\n  address public owner;\n  struct Upload {\n    string ipfsHash;\n    string[] tags;\n  }\n  \n  mapping(address => Upload[]) public uploads;\n\n  event UploadRegistered(address user, string ipfsHash);\n\n  constructor() public {\n    owner = msg.sender;\n  }\n\n  function addUpload(address user, string ipfsHash, string[] tags) public {\n    uploads[msg.sender].push(Upload(ipfsHash, tags));\n    emit UploadRegistered(user, ipfsHash);\n  }\n\n  // function getUploadHash(address _user, uint i) public view returns(string) {\n  //     return uploads[_user][i].ipfsHash;\n  // }\n  //\n  // function getUploadTags(address _user, uint i) public view returns(string[]) {\n  //     return uploads[_user][i].tags;\n  // }\n}\n\n",
  "sourcePath": "/Users/hugo/code/consensys/final_project/contracts/FileStorage.sol",
  "ast": {
    "absolutePath": "/Users/hugo/code/consensys/final_project/contracts/FileStorage.sol",
    "exportedSymbols": {
      "FileStorage": [
        58
      ]
    },
    "id": 59,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "id": 2,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "25:33:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 58,
        "linearizedBaseContracts": [
          58
        ],
        "name": "FileStorage",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 58,
            "src": "85:20:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 3,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "85:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "FileStorage.Upload",
            "id": 10,
            "members": [
              {
                "constant": false,
                "id": 6,
                "name": "ipfsHash",
                "nodeType": "VariableDeclaration",
                "scope": 10,
                "src": "129:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 5,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "129:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9,
                "name": "tags",
                "nodeType": "VariableDeclaration",
                "scope": 10,
                "src": "150:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                  "typeString": "string[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 7,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "150:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "id": 8,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "150:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                    "typeString": "string[]"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Upload",
            "nodeType": "StructDefinition",
            "scope": 58,
            "src": "109:59:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 15,
            "name": "uploads",
            "nodeType": "VariableDeclaration",
            "scope": 58,
            "src": "174:43:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Upload_$10_storage_$dyn_storage_$",
              "typeString": "mapping(address => struct FileStorage.Upload[])"
            },
            "typeName": {
              "id": 14,
              "keyType": {
                "id": 11,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "182:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "174:28:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Upload_$10_storage_$dyn_storage_$",
                "typeString": "mapping(address => struct FileStorage.Upload[])"
              },
              "valueType": {
                "baseType": {
                  "contractScope": null,
                  "id": 12,
                  "name": "Upload",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 10,
                  "src": "193:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Upload_$10_storage_ptr",
                    "typeString": "struct FileStorage.Upload"
                  }
                },
                "id": 13,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "193:8:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_Upload_$10_storage_$dyn_storage_ptr",
                  "typeString": "struct FileStorage.Upload[]"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 21,
            "name": "UploadRegistered",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 20,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17,
                  "indexed": false,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 21,
                  "src": "245:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "245:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19,
                  "indexed": false,
                  "name": "ipfsHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 21,
                  "src": "259:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "259:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "244:31:0"
            },
            "src": "222:54:0"
          },
          {
            "body": {
              "id": 29,
              "nodeType": "Block",
              "src": "301:29:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 24,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "307:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 25,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 130,
                        "src": "315:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 26,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "315:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "307:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 28,
                  "nodeType": "ExpressionStatement",
                  "src": "307:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 30,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "291:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 23,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "301:0:0"
            },
            "scope": 58,
            "src": "280:50:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 56,
              "nodeType": "Block",
              "src": "406:102:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 46,
                            "name": "ipfsHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34,
                            "src": "444:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 47,
                            "name": "tags",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 37,
                            "src": "454:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                              "typeString": "string memory[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                              "typeString": "string memory[] memory"
                            }
                          ],
                          "id": 45,
                          "name": "Upload",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10,
                          "src": "437:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Upload_$10_storage_ptr_$",
                            "typeString": "type(struct FileStorage.Upload storage pointer)"
                          }
                        },
                        "id": 48,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "437:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Upload_$10_memory",
                          "typeString": "struct FileStorage.Upload memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Upload_$10_memory",
                          "typeString": "struct FileStorage.Upload memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 40,
                          "name": "uploads",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 15,
                          "src": "412:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Upload_$10_storage_$dyn_storage_$",
                            "typeString": "mapping(address => struct FileStorage.Upload storage ref[] storage ref)"
                          }
                        },
                        "id": 43,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 41,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 130,
                            "src": "420:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 42,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "420:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "412:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Upload_$10_storage_$dyn_storage",
                          "typeString": "struct FileStorage.Upload storage ref[] storage ref"
                        }
                      },
                      "id": 44,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "412:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Upload_$10_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct FileStorage.Upload storage ref) returns (uint256)"
                      }
                    },
                    "id": 49,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "412:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 50,
                  "nodeType": "ExpressionStatement",
                  "src": "412:48:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 52,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32,
                        "src": "488:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 53,
                        "name": "ipfsHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34,
                        "src": "494:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 51,
                      "name": "UploadRegistered",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "471:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 54,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "471:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55,
                  "nodeType": "EmitStatement",
                  "src": "466:37:0"
                }
              ]
            },
            "documentation": null,
            "id": 57,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addUpload",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 38,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "353:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "353:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34,
                  "name": "ipfsHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "367:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "367:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37,
                  "name": "tags",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "384:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "384:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 36,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "384:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "352:46:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 39,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "406:0:0"
            },
            "scope": 58,
            "src": "334:174:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 59,
        "src": "60:718:0"
      }
    ],
    "src": "0:780:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/hugo/code/consensys/final_project/contracts/FileStorage.sol",
    "exportedSymbols": {
      "FileStorage": [
        58
      ]
    },
    "id": 59,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:0"
      },
      {
        "id": 2,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "25:33:0"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 58,
        "linearizedBaseContracts": [
          58
        ],
        "name": "FileStorage",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 4,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 58,
            "src": "85:20:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 3,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "85:7:0",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "canonicalName": "FileStorage.Upload",
            "id": 10,
            "members": [
              {
                "constant": false,
                "id": 6,
                "name": "ipfsHash",
                "nodeType": "VariableDeclaration",
                "scope": 10,
                "src": "129:15:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 5,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "129:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9,
                "name": "tags",
                "nodeType": "VariableDeclaration",
                "scope": 10,
                "src": "150:13:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                  "typeString": "string[]"
                },
                "typeName": {
                  "baseType": {
                    "id": 7,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "150:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "id": 8,
                  "length": null,
                  "nodeType": "ArrayTypeName",
                  "src": "150:8:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                    "typeString": "string[]"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Upload",
            "nodeType": "StructDefinition",
            "scope": 58,
            "src": "109:59:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 15,
            "name": "uploads",
            "nodeType": "VariableDeclaration",
            "scope": 58,
            "src": "174:43:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Upload_$10_storage_$dyn_storage_$",
              "typeString": "mapping(address => struct FileStorage.Upload[])"
            },
            "typeName": {
              "id": 14,
              "keyType": {
                "id": 11,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "182:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "174:28:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Upload_$10_storage_$dyn_storage_$",
                "typeString": "mapping(address => struct FileStorage.Upload[])"
              },
              "valueType": {
                "baseType": {
                  "contractScope": null,
                  "id": 12,
                  "name": "Upload",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 10,
                  "src": "193:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_struct$_Upload_$10_storage_ptr",
                    "typeString": "struct FileStorage.Upload"
                  }
                },
                "id": 13,
                "length": null,
                "nodeType": "ArrayTypeName",
                "src": "193:8:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_array$_t_struct$_Upload_$10_storage_$dyn_storage_ptr",
                  "typeString": "struct FileStorage.Upload[]"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 21,
            "name": "UploadRegistered",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 20,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 17,
                  "indexed": false,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 21,
                  "src": "245:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 16,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "245:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 19,
                  "indexed": false,
                  "name": "ipfsHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 21,
                  "src": "259:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 18,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "259:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "244:31:0"
            },
            "src": "222:54:0"
          },
          {
            "body": {
              "id": 29,
              "nodeType": "Block",
              "src": "301:29:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 27,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 24,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4,
                      "src": "307:5:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 25,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 130,
                        "src": "315:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 26,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "315:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "307:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 28,
                  "nodeType": "ExpressionStatement",
                  "src": "307:18:0"
                }
              ]
            },
            "documentation": null,
            "id": 30,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 22,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "291:2:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 23,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "301:0:0"
            },
            "scope": 58,
            "src": "280:50:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 56,
              "nodeType": "Block",
              "src": "406:102:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 46,
                            "name": "ipfsHash",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 34,
                            "src": "444:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 47,
                            "name": "tags",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 37,
                            "src": "454:4:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                              "typeString": "string memory[] memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                              "typeString": "string memory[] memory"
                            }
                          ],
                          "id": 45,
                          "name": "Upload",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 10,
                          "src": "437:6:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Upload_$10_storage_ptr_$",
                            "typeString": "type(struct FileStorage.Upload storage pointer)"
                          }
                        },
                        "id": 48,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "437:22:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Upload_$10_memory",
                          "typeString": "struct FileStorage.Upload memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Upload_$10_memory",
                          "typeString": "struct FileStorage.Upload memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 40,
                          "name": "uploads",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 15,
                          "src": "412:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_array$_t_struct$_Upload_$10_storage_$dyn_storage_$",
                            "typeString": "mapping(address => struct FileStorage.Upload storage ref[] storage ref)"
                          }
                        },
                        "id": 43,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 41,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 130,
                            "src": "420:3:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 42,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "420:10:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "412:19:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Upload_$10_storage_$dyn_storage",
                          "typeString": "struct FileStorage.Upload storage ref[] storage ref"
                        }
                      },
                      "id": 44,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "412:24:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Upload_$10_storage_$returns$_t_uint256_$",
                        "typeString": "function (struct FileStorage.Upload storage ref) returns (uint256)"
                      }
                    },
                    "id": 49,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "412:48:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 50,
                  "nodeType": "ExpressionStatement",
                  "src": "412:48:0"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 52,
                        "name": "user",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 32,
                        "src": "488:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 53,
                        "name": "ipfsHash",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 34,
                        "src": "494:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 51,
                      "name": "UploadRegistered",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "471:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,string memory)"
                      }
                    },
                    "id": 54,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "471:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 55,
                  "nodeType": "EmitStatement",
                  "src": "466:37:0"
                }
              ]
            },
            "documentation": null,
            "id": 57,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "addUpload",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 38,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 32,
                  "name": "user",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "353:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 31,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "353:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 34,
                  "name": "ipfsHash",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "367:15:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 33,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "367:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 37,
                  "name": "tags",
                  "nodeType": "VariableDeclaration",
                  "scope": 57,
                  "src": "384:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_string_memory_$dyn_memory_ptr",
                    "typeString": "string[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 35,
                      "name": "string",
                      "nodeType": "ElementaryTypeName",
                      "src": "384:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage_ptr",
                        "typeString": "string"
                      }
                    },
                    "id": 36,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "384:8:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_string_storage_$dyn_storage_ptr",
                      "typeString": "string[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "352:46:0"
            },
            "payable": false,
            "returnParameters": {
              "id": 39,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "406:0:0"
            },
            "scope": 58,
            "src": "334:174:0",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 59,
        "src": "60:718:0"
      }
    ],
    "src": "0:780:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {
    "4447": {
      "events": {},
      "links": {},
      "address": "0x345ca3e014aaf5dca488057592ee47305d9b3e10",
      "transactionHash": "0x7b2c35d36e0e5414354baacbbde26cce57e52280b80bfe58896876dafb8d134d"
    }
  },
  "schemaVersion": "2.0.1",
  "updatedAt": "2018-08-24T00:03:21.555Z"
}

