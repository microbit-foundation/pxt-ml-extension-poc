// This file is meant to be replaced by the MakeCode extension,
// but in the meantime, it contains a usable example model and labels
enum MlRunnerLabels {
  //% block="Shake"
  Shake = 1,
  //% block="Still"
  Still = 2,
  //% block="Circle"
  Circle = 3,
}

const actions = ["Shake","Still","Circle"];

function getModelBlob(): Buffer {
  const result = hex`4C444F4D2300240000000000000000035368616B65005374696C6C00436972636C650000620f47304d4c344650000000700d0000a40500000000000000000000a80000000800000001000000080000000100000000000000000000000000000000000000180000000000000003000000000000002de9f05f0f460169091839600021796038680346b3ec1e1a07f2080292ec010a20ee010a30ee210aa2ec010a92ec010a20ee020a30ee220aa2ec010a92ec010a20ee030a30ee230aa2ec010a92ec010a20ee040a30ee240aa2ec010a92ec010a20ee050a30ee250aa2ec010a92ec010a20ee060a30ee260aa2ec010a92ec010a20ee070a30ee270aa2ec010a92ec010a20ee080a30ee280aa2ec010a92ec010a20ee090a30ee290aa2ec010a92ec010a20ee0a0a30ee2a0aa2ec010a92ec010a20ee0b0a30ee2b0aa2ec010a92ec010a20ee0c0a30ee2c0aa2ec010a92ec010a20ee0d0a30ee2d0aa2ec010a92ec010a20ee0e0a30ee2e0aa2ec010a92ec010a20ee0f0a30ee2f0aa2ec010a02f22402b3ec121a07f2440292ec010a20ee010a30ee210aa2ec010a92ec010a20ee020a30ee220aa2ec010a92ec010a20ee030a30ee230aa2ec010a92ec010a20ee040a30ee240aa2ec010a92ec010a20ee050a30ee250aa2ec010a92ec010a20ee060a30ee260aa2ec010a92ec010a20ee070a30ee270aa2ec010a92ec010a20ee080a30ee280aa2ec010a92ec010a20ee090a30ee290aa2ec010a02f23c02386800f2c00307f268021024b3ec010a07f20801f1ec0e0af3ec0e7a60eea70a21ee081a30ee200a61eea81a30ee010a22ee092a30ee210a62eea92a30ee020a23ee0a3a30ee220a63eeaa3a30ee030a24ee0b4a30ee230a64eeab4a30ee040a25ee0c5a30ee240a65eeac5a30ee050a26ee0d6a30ee250a66eead6a30ee060a27ee0e7a30ee260a30ee070af1ec0a0af3ec0a7a60eea70a21ee081a30ee200a61eea81a30ee010a22ee092a30ee210a62eea92a30ee020a23ee0a3a30ee220a63eeaa3a30ee030a24ee0b4a30ee230a64eeab4a30ee040a25ee0c5a30ee240a30ee050aa2ec010a013c8fd107f2680210680028b8bf40f2000001c210680028b8bf40f2000001c210680028b8bf40f2000001c210680028b8bf40f2000001c210680028b8bf40f2000001c210680028b8bf40f2000001c210680028b8bf40f2000001c210680028b8bf40f2000001c210680028b8bf40f2000001c210680028b8bf40f2000001c210680028b8bf40f2000001c210680028b8bf40f2000001c210680028b8bf40f2000001c210680028b8bf40f2000001c210680028b8bf40f2000001c210680028b8bf40f2000001c2386800f2007307f208020324b3ec010a07f26801f1ec0e0af3ec0e7a60eea70a21ee081a30ee200a61eea81a30ee010a22ee092a30ee210a62eea92a30ee020a23ee0a3a30ee220a63eeaa3a30ee030a24ee0b4a30ee230a64eeab4a30ee040a25ee0c5a30ee240a65eeac5a30ee050a26ee0d6a30ee250a66eead6a30ee060a27ee0e7a30ee260a30ee070af1ec020af3ec027a60eea70a21ee081a30ee200a30ee010aa2ec010a013cafd107f208021046032100f002f8bde8f09f012938b5d0ed002a29d9031d00eb8102f3ec017af4ee627af1ee10fac8bff0ee672a9a42f4d1002402ee104a054695ed000a30ee620a00f015f80134a14232ee002aa5ec010af2d8002390ed007ac7ee027a01339942e0ec017af6d838bd0029e1d138bddfed297ab4eee70af1ee10fa48d4dfed277ab4eee70af1ee10fa3adcdfed247adfed244a9fed243adfed243a9fed245a9fed244adfed245a9fed246adfed246a60ee277ab7ee007a77eea47a77eee47aa7ee830afdeee74aa7eea30af0ee457ae4ee007a14ee903ae7ee805aa5ee806ae6ee006af0ee667af0ee476ae7ee806aa6ee807a17ee102a02ebc35300ee103a7047dfed107ab7ee007a87ee270a70479fed0c0a704700000000aac20000ae423baab83f0000404b007231bf8ebebfb56e2f093c00a0b43aadad2a3d28aa2a3efbffff3e000000008df59a3f00c5b2bea89bab3f007746bfe33fd33faddc793d9cbedf3f8446273e9080f73fa57b0abf7ac40d40a5a3783fe05fe43f67fe8a3fb4df913fbc44913d13a7a63fe57fa03faffecb3f7376acbefac4fd3f17be89bef966ed3f6f944bbef322213f5864c1bf4f5eed3e608073bf3b1e0e3fbfde9bbf0d1e453d1af6d8bf45bf293d1736c0bf37c75d3de4ed2ac0f2ce11406ae2853cbf72104091e7063ef4d37c40516ddd3cf44af93fc4ea4abf580d1e40915499bffe64fe3f98268cbf3c153abedac78b3db8c883bdedfa863e178ee63d2242653ee78a9e3e9f326a3ec4698dbe73a91a3e3c1f8f3ea3bfdc3daf1970befd2863be18d3383deadf243e376a0f3d097990bed0e6693efb3d2dbc653ad8bc4fe8de3e30f8513d8a59c8be4cdfa9be1ff539be9b87e1bded12efbe2a440f3db5d9203d18560ebf2ee81cbea5c1e03e3ba7933e065ac2bdd4040dbe0f04bfbdb53d853cc7e213bf56bd27bea6b4b6be08a5c43ba34d773e5f2b9cbecd84a5bdb0e956bef7caa53c366c063ef00c3b3f3c392fbed917c4bc1eee43bd16e70f3c675adb3ec6558d3e02df37be03feb73d36f921bf7d6186bebfb0bcbe6fbfc33e7b0db23de37983bd8df04e3d38d7a93efc722b3e6fcd2b3f827e823eb17eee3cb209b93e5607ad3d2bfb453f5e63b33ea2fd7a3d03a4ec3e55e25ebdecdd69bd63d1043f486906be0af9bf3d1654253e3352f93ddeb7063ffe34d7bc0167aabe0aaf0e3e1df4403d53c4633bd4d0663e79ded6bdf89f8abe4c2df73da7997fbeb265a3beef03b5bef57ea63deb27803e9e7a76be31739d3c058a593e862e693df9ba073ea88fe83cf83b273ee0d3e93ce1f029beb5e43cbebd9ef8be193eba3dc07a833ddf55ac3e9f2cae3b43769b3d557a283d581cbf3dd61a813e0d9b9a3e54a3e23e11b432bda25c853d7508c63dd5d2e43e4bc48d3d8888d9bdc9088d3e761f06be9a38463dcff4d8bdb5a262bd723e1d3e27e792be66390abf97750cbeab528f3bf1a7b0be4fad0cbe7afe06be76a096bed382b13e083de83eb05fbe3ea89c06bfed5df0be490cbe3e07a88dbcf71a943eb27f79bd8c9dbfbd222090bef453ee3e93ef2f3d4fdc743d4c35943e8b62aabdbb79d0be4fb9b63eb075a53e949f0cbf6749aa3ee8852cbb76df3b3db077603e9445ca3d5c4c623f7ad2acbd0629273f9e0c3c3e177c2cbcbfacbcbe1604b5bdf926babe14391ebfd873953d2568a2beb34e33be9ab7273d09bd353e693b593cab2bf23e019bc83d7c39703d80b6f83da05075beb3ac213e4ddf90be128a8f3e93389ebd9154433f8a06a03e02fbb3bd77fa853ecf7f763de79739be7692b03e566aa73deaf6c33cfaf3543f312e563d9f216ebee366aa3eb1d4993c7bc8cf3e4dff5a3e14b9a93dba09143ec56670be9c3d943cc1ac80be30b99ebdb14917bf516c8abe6d2eda3eea263f3db1766a3e2dd4773e7106c6be66db503ad27d893e299018be3b74373e90daadbd05c8db3d897bc13d07272d3e3fa6413ec3dd8fbc170939be007c233d618664be951b163ee3c66b3ecfc3103f8307cbbec158c23bc27b2a3ea061b23d1aaf9ebe5d978e3c08db87be477dabbe83997bbd25824abd39af593ec81a063d160b59be80ff13bee5b448bc72ae11bd54639b3eac9e38be4973d03c0b721ebe125aafbd87d0003fc28d8fbe0e5b6a3ecce79ebe54a8e33e2b9e01bfde14c33b58e15ebee494e03e27c8713eb31a0bbe2cc24ebd8bf596bea1983a3e5fc7bd3ec7d59abdbf1fa03e56f4de3e9d9e473e21f288be703ae03e85261f3edf2046be9ae7a83e5a658a3cba18f23d5900263fc23d8e3e3778a33ea19bd93e2099ca3d28e50bbe364756be0c7381bedc3c04bf2d0e10bfa87584beef5824bf38ec353bc2cd823e01a88a3e8834823d16d99cbec9e4bb3ecd05f4be426b163f8c604c3d1b2f693d43278d3e6c9c603ed317b73e0e5c10bec34b74bdff5297be5d46bdbc84a634bea00a0d3dfb6e373e7411363e9f6a6d3d6746fabc5f9c82bbcb648dbef128413ed8d3603e1e9c063ee11f323e1c592f3d013981bdbd7b5e3e7bff073eb6f11f3eedc0c1bd0910f9be52807dbedb25b9bdcb6d873e2f6035bfc40dba3e7fb1373eef1105beea61ff3e9179b03d100bbfbd3c08063e301a8ebd66a1e2bdac1430bed8c8933e0639b03b9cc01ebe5713a83e6ce65b3e5d44e33e2b31b63e79a92dbe568e07be650dbe3dc3fca2bea8fb1cbe024216bf3cda85be4d4e9cbd183799be076f37bd7dac683dc4bf283d264bdb3ec310863e204c6a3d1a13413d16b1873e1a2f793e8067c6b97f3970bea5b4093febe3b6be52b3d93e928d4abf2f4645bef098d6be7f94cf3da2025abd8e94aa3d22bfe0bd96f80dbe3b73c53e7e89ccbd705a3ebe9e80bc3cf95cc3bd31295d3d24f961bd4e9d8e3e71a1d83d180cbd3968b1ee3e59372b3d52d988be27fa01be9016993e70ded83e5ec0aa3e1cb2e6bdf64b2dbece31663dae30893d9f23b2be91508a3d9c87ddbe85e5893f02176b3ed853f53e216ae3bd9c632fbeb8f5913f4cd3253f99986dbfde0fc03edc444d3eb2790a3e0c2ff1bd631246bf11ce94bc4b5228be269a053f005bae3e9999a3bee162f9bc7a3f37bfdd6637bfd70681be4a6c863eb5136ebe9996563e3cb0b1beb6c77c3fb7708ebe05ca3a3f56d33bbd9f42dbbe6226033fa48694be6a7710bfb964babe3ee8babe568d23be5a7b293feebf843f2534a2be09ec503dacca233cc92cf1be1a1769befa6d9cbe4c94b0beeb52153f2656cb3e`;
  return result;
}
