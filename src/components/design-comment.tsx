export default function DesignComment() {
    return (
        <div className="flex flex-col border border-gray-300 rounded" >
            
            <form className="flex flex-row" action="">
                <input className="flex-1 border border-gray-300 rounded" type="text" value="i think it would be better if " />
                <button className="flex-1 border border-gray-300 rounded" type="submit">add design comment</button>
            </form>
        </div>
    );
}


const on_client = typeof window !== "undefined";    
const config = {
    using_design_comments: false
}


if (on_client && config.using_design_comments) {
window.addEventListener ("mouseover", (event) => {
    const element: HTMLElement = event.target;
    const prev_border = element.style.border;
    element.setAttribute("prev_border", prev_border);
    element.style.border = "dashed 1px lightblue"; 
})


window.addEventListener ("mouseout", (event) => {
    const element: HTMLElement = event.target;  
    element.style.border = element.getAttribute("prev_border");
})
}