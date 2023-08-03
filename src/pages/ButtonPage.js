import Button from "../components/Button";
import { FaPizzaSlice, FaBeer, FaGrinHearts, FaDizzy, FaTaxi } from "react-icons/fa";

function ButtonPage() {
    const handleEvent = () => {
    }
    return (
        <div className="m-5">
            <div>
                <Button primary rounded onClick={handleEvent}>
                    <FaPizzaSlice />
                    Primary
                </Button>
            </div>
            <div>
                <Button secondary onMouse onMouseEnter={handleEvent}>
                    <FaBeer />
                    Secondary
                </Button>
            </div>
            <div>
                <Button success rounded outline onMouseLeave={handleEvent}>
                    <FaGrinHearts />
                    Success
                </Button>
            </div>
            <div>
                <Button warning>
                    <FaDizzy />
                    Warning
                </Button>
            </div>
            <div>
                <Button danger outline>
                    <FaTaxi />
                    Danger
                </Button>
            </div>
        </div>
    )
};

export default ButtonPage;