import React, { FormEvent, useState } from 'react';
import { useQRCode } from 'next-qrcode';
import styles from '../styles/styles.module.css'
import {  AiOutlineCloudDownload  } from "react-icons/ai";
import html2canvas from 'html2canvas';
import { toast } from "react-toastify";



function Home() {
  const { Canvas } = useQRCode();

    const [url, setUrl] = useState('')
    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)
    const hiddenOrHide = () => setShowElement(false)



async function urlQr(event: FormEvent) {
  event.preventDefault();
  if(!url) {
    return toast.error("Por favor informe uma url");
  }
   showOrHide()

}

async function canva() {

  if(!url) {
    return toast.error("Por favor informe uma url");
  }

  html2canvas(document.getElementById("print-area")!).then(function(canvas) {
    var anchorTag = document.createElement("a");
    document.body.appendChild(anchorTag);
    anchorTag.download = `QrCode${url}.png`;
     anchorTag.href = canvas.toDataURL();
     anchorTag.target = '_blank';
     anchorTag.click();

});



  toast.success("Download realizado com sucesso!");


}





  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        
        <div>
        <h1>Gerador de QrCode</h1>
         <form onSubmit={urlQr}>
         <input  type="text"
                name="texto"
                id="texto"
                defaultValue={url}
                    onChange={(e)=> setUrl(e.target.value)} />

          <button className={styles.btn1} type='submit' >GERAR QRCODE</button>
         </form>
          <div className={styles.shared}>
            <button className={styles.btn2}onClick={canva}><p className={styles.p1} >
            <AiOutlineCloudDownload className={styles.icon}/> Download 
            </p></button>
          </div>
        </div>
          
        <div>

        { showElement ? <div id='print-area'>
          <Canvas
 text={` ${url}`}   
 options={{
        type: 'image/jpeg',
        quality: 0.3,
        level: 'M',
        margin: 3,
        scale: 4,
        width: 200,
        
      }}
     
    />
        </div> : null }

        
        </div>
      </div>
      
      
    </div>
  );

  
}

export default Home;