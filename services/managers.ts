

export const managers =async ()=>{
    const res = await fetch ('/api/managers')
    const data = await res.json()
    
    return data ;
}