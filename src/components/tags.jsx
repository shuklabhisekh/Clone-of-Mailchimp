import  React from "react"
import './Add_contact.css'


export const Tagbutton = ({show,onInputChange}) =>{
    const [tags, setTags] = React.useState([]);

    const [text, setText] = React.useState({});


    const handleChange = (e) => {
      const { name, value } = e.target;
      setText({ ...text, [name]: value });
    };
    


    const addTags = event => {
        event.preventDefault()
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            // console.log("sd",event.target)
            onInputChange("tag", [...tags, event.target.value])
            event.target.value = "";
        }
    };

    const removeTags = index => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };

    return (


            <div className="tags-input" style={{display : (show ? "block" : "none" )}}>

                
                <ul>
                    {tags.map((tag, index) => (
                        <li key={index}>
                            <span>{tag}</span>
                            <button type="button" className="material-icons" onClick={() => removeTags(index)} >x</button>
                        </li>
                    ))}
                </ul>
                <input
                    id="tag_input" 
                    type="text"
                    name="tagname"
                    onChange={handleChange}
                    onKeyUp={event => addTags(event)}
                    placeholder="Add or create a tag"
                />
            </div>
    );

}


