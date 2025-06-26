export type TTheme = "dark" | "light" | "system" | null;
export type TDocs = {
    img : string
    text : string
    id:number
    title : string
}

export type TManagers ={
    id:number 
    name : string
    gender : "man" | "woman"
    title : string
    info : string
    img:string
}

export type TProps = { id: number, active: number, img: string, title: string, info: string, link: string, onClicked: (id: number) => void }

export interface TMenuRef {
    getElement : ()=>HTMLDivElement | null;
}