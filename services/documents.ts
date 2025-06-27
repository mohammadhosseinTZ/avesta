import { TDocs } from "@/types/types"


export const docs = async ():Promise<TDocs[]> => {
    const res = await fetch ('/api/documents');
    const data = await res.json()
    return data
    
     
}