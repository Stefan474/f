import Card from "./shared/Card"
import { useState } from "react"
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

function FeedbackForm() {

    const[text, setText] = useState ("");
    const[rating, setRating] = useState (5);
    const[btnDisabled, setBtnDisabled] = useState (true);
    const[message, setMessage] = useState ("");

    const handleTextChange = (e) => {

        if(text === '') {
            setBtnDisabled(true);
            setMessage(null);
        }
        else if(text.trim().length <= 10 && text !== '') {
            
            setMessage("text must be at least 10 characters long"); 
            setBtnDisabled(true);
        }
        else{
            setBtnDisabled(false);
            setMessage(null);
        }

        setText(e.target.value);
    }

    const handleRatingChange = (e) => {
        return setRating(rating);
    }
        

  return (
    <Card reverse={false}>
        <form>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => {
                  return setRating(rating);
              }}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" placeholder="Write a review" value={text}/>
                <Button type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm