import React, { FormEvent, useState } from 'react';
import { useQRCode } from 'next-qrcode';
import styles from '../styles/styles.module.css'
import { AiFillCopy, AiOutlineCloudDownload, AiOutlineWhatsApp } from "react-icons/ai";



function Home() {
  const { Canvas } = useQRCode();

    const [url, setUrl] = useState('')
    const [showElement, setShowElement] = useState(false)
    const showOrHide = () => setShowElement(true)
    const hiddenOrHide = () => setShowElement(false)



async function urlQr(event: FormEvent) {
  event.preventDefault();

  showOrHide()

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

          <button type='submit' >GERAR QRCODE</button>
         </form>
          <h3>Compartilhar</h3>
          <div className={styles.shared}>
            <button onClick={() => {
                            navigator.clipboard.writeText(
                              `${url}`
                            );
                            // toast.success("Link copiado com sucesso!");
                          }}>
            <p className={styles.p1}  >
            <AiOutlineWhatsApp className={styles.icon}/> WhatsApp 
            </p>
            </button>
        
            
            <p className={styles.p2} ><AiFillCopy className={styles.iconCopy}/> Copiar</p>
          
            <p className={styles.p4} >
            <AiOutlineCloudDownload className={styles.icon}/> Download 
            </p>
          </div>
        </div>
          
        <div>

        { showElement ? <Canvas
 text={` ${url}`}   
 options={{
        type: 'image/jpeg',
        quality: 0.3,
        level: 'M',
        margin: 3,
        scale: 4,
        width: 200,
        
      }}
    /> : null }

        
        </div>
      </div>
      
      
    </div>
  );
}

export default Home;