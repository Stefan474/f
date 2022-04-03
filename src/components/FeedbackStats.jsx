

function FeedbackStats({feedback}) {

    //calculate ratings average
    function average (feedback) {
        let sum = 0;
        for (let i = 0; i < feedback.length; i++) {
            sum += feedback[i].rating;
        }
        return sum / feedback.length;


    }

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} reviews</h4>
        <h4>Average rating: {isNaN(average(feedback)) ? 0 : average(feedback).toFixed(1).replace(/[.,]0$/, '')}</h4>
    </div>
  )
}

export default FeedbackStats