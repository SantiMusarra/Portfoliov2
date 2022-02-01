export class Project{

    title : string;
    subTitle: string;
    description: string;
    imgSrc: string;
    tools: string[];
    href: string;
    githubLink: string;
    side : boolean;
    constructor( title: string, subTitle: string, description: string, imgSrc: string,tools: string[], href: string , githubLink: string, side : boolean)
    {
        this.title = title;
        this.subTitle = subTitle;
        this.description = description;
        this.imgSrc = imgSrc;
        this.tools = tools;
        this.href = href;
        this.githubLink = githubLink;
        this.side = side;
    }

}