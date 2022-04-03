import Header from "./components/Header";
import FeedbackItem from "./components/FeedbackItem";


function App(){

    return(
        <>
        <Header />
        <div className="container">
            <FeedbackItem></FeedbackItem>
        </div>
        </>
    )
}

export default App;