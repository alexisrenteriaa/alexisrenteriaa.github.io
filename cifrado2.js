(function(_0x1359ad,_0x34c1f3){const _0x55f650=_0x205f,_0x5ced90=_0x1359ad();while(!![]){try{const _0x4fd318=parseInt(_0x55f650(0x17f))/0x1+parseInt(_0x55f650(0x16b))/0x2+parseInt(_0x55f650(0x16d))/0x3+-parseInt(_0x55f650(0x174))/0x4*(-parseInt(_0x55f650(0x164))/0x5)+parseInt(_0x55f650(0x16e))/0x6*(-parseInt(_0x55f650(0x161))/0x7)+parseInt(_0x55f650(0x165))/0x8*(parseInt(_0x55f650(0x169))/0x9)+parseInt(_0x55f650(0x15d))/0xa*(-parseInt(_0x55f650(0x175))/0xb);if(_0x4fd318===_0x34c1f3)break;else _0x5ced90['push'](_0x5ced90['shift']());}catch(_0x4c2b8e){_0x5ced90['push'](_0x5ced90['shift']());}}}(_0x5b33,0x5bc4b));let encryptedMessage='',decryptionKey='';function clearFields(){const _0xd128d6=_0x205f;document[_0xd128d6(0x166)]('encryptedMessage')[_0xd128d6(0x170)]='',document[_0xd128d6(0x166)](_0xd128d6(0x173))[_0xd128d6(0x170)]='',document[_0xd128d6(0x166)](_0xd128d6(0x16a))[_0xd128d6(0x170)]='',encryptedMessage='',decryptionKey='';}function _0x205f(_0x330559,_0x477c1d){const _0x5b3332=_0x5b33();return _0x205f=function(_0x205f58,_0x4c35a7){_0x205f58=_0x205f58-0x15a;let _0x2dcb21=_0x5b3332[_0x205f58];return _0x2dcb21;},_0x205f(_0x330559,_0x477c1d);}function loadKey(){const _0x18f3d7=_0x205f,_0x4edfb2=document[_0x18f3d7(0x15e)](_0x18f3d7(0x180));_0x4edfb2[_0x18f3d7(0x15b)]=_0x18f3d7(0x160),_0x4edfb2[_0x18f3d7(0x177)]='.txt',_0x4edfb2[_0x18f3d7(0x17e)]=_0x2840f2=>{const _0x225688=_0x18f3d7,_0x9de44c=_0x2840f2[_0x225688(0x15a)][_0x225688(0x163)][0x0],_0x268d87=new FileReader();_0x268d87['onload']=_0x503f32=>{const _0x262cb0=_0x225688;decryptionKey=_0x503f32[_0x262cb0(0x15a)][_0x262cb0(0x17d)][_0x262cb0(0x15c)](),document['getElementById'](_0x262cb0(0x173))[_0x262cb0(0x170)]=decryptionKey;},_0x268d87[_0x225688(0x162)](_0x9de44c);},_0x4edfb2['click']();}function _0x5b33(){const _0x57fbac=['text/plain','click','download','result','onchange','445800VmCeQP','input','target','type','trim','27400jWLxtP','createElement','No\x20hay\x20mensaje\x20desencriptado\x20para\x20guardar.','file','3682MSFSjf','readAsText','files','1527385GdKyPe','1752blyGUE','getElementById','createObjectURL','charCodeAt','10359EnwXPO','decryptedMessage','1420196sPUOJk','onload','1675896NNgRPG','6330DxpxEG','href','value','fromCharCode','encryptedMessage','key','8XVCLCV','6611gfsHOf','mensaje_desencriptado.txt','accept','La\x20llave\x20debe\x20ser\x20un\x20número\x20válido.','.txt'];_0x5b33=function(){return _0x57fbac;};return _0x5b33();}function loadEncryptedMessage(){const _0x557b68=_0x205f,_0x2f9c03=document[_0x557b68(0x15e)](_0x557b68(0x180));_0x2f9c03[_0x557b68(0x15b)]=_0x557b68(0x160),_0x2f9c03[_0x557b68(0x177)]=_0x557b68(0x179),_0x2f9c03['onchange']=_0x24e23d=>{const _0x408743=_0x557b68,_0xd6e694=_0x24e23d[_0x408743(0x15a)]['files'][0x0],_0x1dab32=new FileReader();_0x1dab32[_0x408743(0x16c)]=_0x713600=>{const _0x467023=_0x408743;encryptedMessage=_0x713600['target'][_0x467023(0x17d)]['trim'](),document['getElementById'](_0x467023(0x172))[_0x467023(0x170)]=encryptedMessage;},_0x1dab32[_0x408743(0x162)](_0xd6e694);},_0x2f9c03[_0x557b68(0x17b)]();}function decryptMessage(){const _0x4ead9e=_0x205f;if(!encryptedMessage||!decryptionKey){alert('Debe\x20cargar\x20un\x20mensaje\x20encriptado\x20y\x20una\x20llave.');return;}const _0x2c06aa=parseInt(decryptionKey,0xa);if(isNaN(_0x2c06aa)){alert(_0x4ead9e(0x178));return;}let _0x534dc8='';for(const _0x481ba5 of encryptedMessage){if(_0x481ba5>='A'&&_0x481ba5<='Z'){const _0x3a1628=String[_0x4ead9e(0x171)]((_0x481ba5[_0x4ead9e(0x168)](0x0)-0x41-_0x2c06aa+0x1a)%0x1a+0x41);_0x534dc8+=_0x3a1628;}else _0x481ba5==='\x20'?_0x534dc8+='\x20':_0x534dc8+=_0x481ba5;}document['getElementById'](_0x4ead9e(0x16a))[_0x4ead9e(0x170)]=_0x534dc8;}function saveDecryptedMessage(){const _0x3301b2=_0x205f,_0x3624f3=document[_0x3301b2(0x166)](_0x3301b2(0x16a))['value'];if(!_0x3624f3){alert(_0x3301b2(0x15f));return;}const _0x598e34=new Blob([_0x3624f3],{'type':_0x3301b2(0x17a)}),_0x3328f3=URL[_0x3301b2(0x167)](_0x598e34),_0x24ce8a=document[_0x3301b2(0x15e)]('a');_0x24ce8a[_0x3301b2(0x16f)]=_0x3328f3,_0x24ce8a[_0x3301b2(0x17c)]=_0x3301b2(0x176),_0x24ce8a[_0x3301b2(0x17b)]();}