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
        width: "10em"
    };

    const inputStyleQuantity = {
        fontSize: "20px",
        marginLeft: "3.1em",
        marginBottom: "15px",
        width: "10em"
    };


    const inputStyleOrder = {
        fontSize: "20px",
        marginLeft: "2em",
        marginBottom: "15px",
        width: "10em"
    };

    const form = document.querySelector("#searchForm:");
    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        const action = form.elements.action.value;
        const quantity = form.elements.quantity.value;
        const company = form.elements.companies.value;
        const orderType = form.elements.type.value;
        showInfo(company);

    });

    const showInfo = (data) => {
        const showCompany = document.createElement("h1");
        showCompany.body = data;
        document.body.append(showCompany);

    }



    return (
        <body>

            <h1 class="title">
                Mutual Funds and Stocks
            </h1>

            <h2>Search for a Fund</h2>

            <form id="searchForm">
                <MyForm class="action" text="Action" labelStyle={labelStyle} inputStyle={inputStyleAction} type="text" name="action" />
                <MyForm text="Quantity" labelStyle={labelStyle} inputStyle={inputStyleQuantity} type="number" name="quantity" />

                <label class="companylabel" for="companies">Company</label>
                <select name="companies" id="companies">
                    <option value="default" selected disabled hidden>Choose here</option>
                    <option value="bestbuy">Best Buy</option>
                    <option value="apple">Apple</option>
                    <option value="tesla">Tesla</option>
                    <option value="audi">Audi</option>
                </select>

                <MyForm text="Order Type" labelStyle={labelStyle} inputStyle={inputStyleOrder} type="text" name="type" />



                <MyButton text="Submit" style={buttonStyle} />

            </form>

            <img src={mutualfund} class="mutualfundIMG" />

        </body>
    );
}

export default MutualFund;
