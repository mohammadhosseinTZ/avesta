'use client'
import Hero from '@/components/tabs/Hero'
import Images from '@/components/tabs/Images'
import { docs } from '@/services/documents'
import { TDocs } from '@/types/types'
import React, { useEffect, useState } from 'react'

function Tabs() {
    const [documents, setDocuments] = useState<[] | TDocs[]>([])
    const [item , setItem] = useState< TDocs | {id:0 , title:'' , text:'' , img:''}>({id:0 , title:'' , text:'' , img:''})
    useEffect(() => {
        const fetchData = async () => {

            const data: TDocs[] | [] = await docs()
            console.log(data , "data");
            
            data && setDocuments(data)
            setItem(data[0])
        }
        fetchData()

    }, [])
    const handleClicked = (item:TDocs)=>setItem(item);
    
    return (
        <div className='container out-bg p-[20px_23px] md:p-[60px_63px]  rounded-[15px] mb-[50px]'>
            {documents.length > 0 &&
                <div className='inner-bg rounded-[15px]'>
                    <Hero document={item}/>
                    <Images documents={documents} onClicked = {handleClicked} filter={item['id']}/>
                </div>
            }
        </div>
    )
}

export default Tabs