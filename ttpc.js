
    $(document).ready(function(){         
      //window.location.href = "https://www.google.com/";
    });

function convertArea(txtarea, toID, txtareabenA,txtareabenB, txtareataisan) {
  if (!txtarea) return 0;
  var srcid = detectFormat(txtarea.value);
  if (!srcid) return 0;
  var srcmap = initCharMap(srcid);
  var destmap = initCharMap(parseMapID(toID));
  updateArea(txtarea, srcmap.convertTxtTo(txtarea.value,destmap));
  var indexbena = txtarea.value.lastIndexOf("Bên  A:");
  var indexbenb = txtarea.value.lastIndexOf("Bên  B:");
  var indexTS = txtarea.value.lastIndexOf("Nội  dung :");
  txtareabenA.value = txtarea.value.substring(indexbena+7,indexbenb).trim().split("x•").join("xã").split("Chứng minh nhân dân").join("CMND").split("Căn cước công dân").join("CCCD").replace("thành phố Vũng Tàu, tỉnh Bà Rịa - Vũng Tàu","TP. Vũng Tàu").replace("Cươ trú","Cư trú").split("•").join("ã").split("thành phố Vũng Tàu, tỉnh Bà Rịa- Vũng Tàu").join("TP. Vũng Tàu").split("thành phố Vũng Tàu").join("TP. Vũng Tàu").split("thành phố Vũng Tàu").join("TP. Vũng Tàu").split("tỉnh Bà Rịa- Vũng Tàu").join("tỉnh BRVT").split("tỉnh Bà Rịa - Vũng Tàu").join("tỉnh BRVT").split("tỉnh Bà Rịa-Vũng Tàu").join("tỉnh BRVT").split(" ánh").join(" Ánh").split(" út").join(" Út").split(" trật tự xã hội").join(" TTXH");
  
  txtareabenB.value = txtarea.value.substring(indexbenb+7,indexTS).trim().split("x•").join("xã").split("Chứng minh nhân dân").join("CMND").split("Căn cước công dân").join("CCCD").replace("thành phố Vũng Tàu, tỉnh Bà Rịa - Vũng Tàu","TP. Vũng Tàu").replace("Cươ trú","Cư trú").split("•").join("ã").split("thành phố Vũng Tàu, tỉnh Bà Rịa- Vũng Tàu").join("TP. Vũng Tàu").split("thành phố Vũng Tàu").join("TP. Vũng Tàu").split("thành phố Vũng Tàu").join("TP. Vũng Tàu").split("tỉnh Bà Rịa- Vũng Tàu").join("tỉnh BRVT").split("tỉnh Bà Rịa - Vũng Tàu").join("tỉnh BRVT").split("tỉnh Bà Rịa-Vũng Tàu").join("tỉnh BRVT").split(" ánh").join(" Ánh").split(" út").join(" Út").split(" trật tự xã hội").join(" TTXH");
  
  txtareataisan.value = txtarea.value.substring(indexTS+11).trim().replace("::17ỵ17::,","").replace("x•","xã").split("thành phố Vũng Tàu, tỉnh Bà Rịa - Vũng Tàu").join("TP. Vũng Tàu").split("•").join("ã").split("thành phố Vũng Tàu, tỉnh Bà Rịa- Vũng Tàu").join("TP. Vũng Tàu").split("thành phố Vũng Tàu").join("TP. Vũng Tàu").split("tỉnh Bà Rịa- Vũng Tàu").join("tỉnh BRVT").split("tỉnh Bà Rịa - Vũng Tàu").join("tỉnh BRVT").split("tỉnh Bà Rịa-Vũng Tàu").join("tỉnh BRVT").split(" ánh").join(" Ánh").split(" út").join(" Út").split(" trật tự xã hội").join(" TTXH");

  
  
  return 1;
}        

