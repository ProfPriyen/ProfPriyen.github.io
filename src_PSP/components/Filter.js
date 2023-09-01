import React,{useState} from 'react'
import AllData from './AllData'

function Filter() {

    const [images,setImage] =useState(AllData);
    const allItem=() =>{
        const finalData=AllData.filter((value) =>{
            return value;
        })
        setImage(finalData);
         }

         const only11=(categoryItem) =>{
            const finalData = AllData.filter((value) =>{
                return value.category===categoryItem;
            })
            setImage(finalData);
             }
             const only12=(categoryItem) =>{
                const finalData = AllData.filter((value) =>{
                    return value.category===categoryItem;
                })
                setImage(finalData);
                 }
                 const only10=(categoryItem) =>{
                    const finalData = AllData.filter((value) =>{
                        return value.category===categoryItem;
                    })
                    setImage(finalData);
                     }
                     return(
                        <>
                        <div>
                            <button onClick={allItem}>All</button>
                            <button onClick={() =>only11('Note11')}>Note11</button>.
                            <button onClick={() =>only12('Note12')}>Note12</button>.
                            <button onClick={() =>only10('Note12pro')}>Note12pro</button>
                            </div>
                            <div>
                                {images.map((value)=>{
                                    return(
                                    <div> <img src={value.pic} className="abc"/></div>
                                    )
                                })}
                                </div>
                                </>
                     )
}
export default Filter