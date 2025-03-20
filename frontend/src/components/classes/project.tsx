export default class Project {
    id:number;
    name: string;
    images: string[];
    description: string;
    content: string;
    tecnologias: string[];

    constructor (id:number,name:string,images:string[],description:string,content:string,tecnologias:string[]) {
        this.id=id;
        this.name=name;
        this.images=images;
        this.description=description;
        this.content=content;
        this.tecnologias=tecnologias;
    }
}