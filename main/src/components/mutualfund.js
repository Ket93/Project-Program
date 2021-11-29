import './mutualfund.css';
import MyButton from './button.js';
import MyForm from './form.js';
import mutualfund from ".././images/mutualfund.png";


function MutualFund() {

    const buttonStyle = {
        backgroundColor: "black",
        color: "white",
        fontSize: "20px",
        padding: "10px 60px",
        marginTop: "1em",
        marginBottom: "2em",
        borderRadius: "5px",
        margin: "10px 0px",
        cursor: "pointer"
    };

    const labelStyle = {
        fontSize: "20px",
    };

    const inputStyleAction = {
        fontSize: "20px",
        marginLeft: "4em",
        marginBottom: "15px",
    };

    const inputStyleQuantity = {
        fontSize: "20px",
        marginLeft: "3.1em",
        marginBottom: "15px",
    };

    const inputStyleCompany = {
        fontSize: "20px",
        marginLeft: "2.7em",
        marginBottom: "15px",
    };

    const inputStyleOrder = {
        fontSize: "20px",
        marginLeft: "2em",
        marginBottom: "15px",
    };



    return (
        <body>

            <h1 class="title">
                Mutual Funds and Stocks
            </h1>

            <h2>Search for a Fund</h2>

            <MyForm text="Action" labelStyle={labelStyle} inputStyle={inputStyleAction} type="text" />
            <MyForm text="Quantity" labelStyle={labelStyle} inputStyle={inputStyleQuantity} type="number" />

            <label class="companylabel" for="companies">Company</label>
            <select name="companies" id="companies">
                <option value="default" selected disabled hidden>Choose here</option>
                <option value="bestbuy">Best Buy</option>
                <option value="apple">Apple</option>
                <option value="tesla">Tesla</option>
                <option value="audi">Audi</option>
            </select>

            <MyForm text="Order Type" labelStyle={labelStyle} inputStyle={inputStyleOrder} type="text" />



            <MyButton text="Submit" style={buttonStyle} />

            <img src={mutualfund} class="mutualfundIMG" />

        </body>
    );
}

export default MutualFund;
