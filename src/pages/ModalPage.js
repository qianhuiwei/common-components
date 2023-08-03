import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>OK</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Hello</p>
        </Modal>
    );

    return (
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sunt quos fuga, pariatur modi accusamus maiores delectus magni! Debitis, nostrum corrupti! Adipisci tenetur corrupti sit officia eveniet quos, atque dolores iure debitis eius magnam modi nihil. Amet porro consequuntur sed ex ratione. Recusandae vel inventore maxime pariatur? Quasi praesentium dolor maiores. Debitis ut aut quas, nam ullam dolorum unde eum fugiat voluptatibus velit repellat quibusdam dolores sit quasi, impedit doloribus ad magnam consequuntur perferendis molestias? Tempora mollitia minima rerum amet voluptatum minus rem debitis corporis sequi. Quaerat voluptatibus nisi quod repellendus perspiciatis officia, nihil cumque, velit quos recusandae ipsa tenetur, deleniti at iste impedit qui reprehenderit. Recusandae impedit vitae odit magni enim alias saepe at, commodi quae officia. Quibusdam aspernatur necessitatibus nam tempora commodi? Vel, perferendis laborum possimus, odio perspiciatis iusto molestias totam, autem obcaecati consequuntur blanditiis iste praesentium inventore quaerat? Minus quam eligendi quibusdam, animi, autem blanditiis corrupti voluptatibus commodi ut alias aut expedita? Totam consequuntur perferendis eum delectus! Molestiae, quis impedit nulla eius nam cupiditate suscipit tempore animi error obcaecati in laboriosam eaque sapiente minus id eum ullam. Accusantium esse itaque quam, commodi rem id iste eveniet fugiat tempora voluptates enim eligendi maiores in vero quod doloribus inventore ipsa adipisci exercitationem. At asperiores commodi ex minus, laudantium dolorem a? Porro obcaecati voluptas perferendis excepturi amet, est molestias quod ipsum odit necessitatibus, nam ea aperiam, nesciunt iusto corrupti corporis quia. Veniam quasi, odio atque culpa voluptas deserunt ut animi quia reiciendis. Dicta quisquam sequi blanditiis, dolor, placeat, sed in earum doloremque ex architecto iure unde repellendus. Consectetur minima veritatis assumenda quidem magni totam laudantium. Aperiam adipisci beatae dignissimos dolorum atque soluta itaque excepturi qui est cum pariatur quo nulla voluptatum consectetur obcaecati, vitae dolore animi autem minus ipsam vel? Placeat hic est natus odio eius modi, rem ad velit.</p>
        </div>
    );
}

export default ModalPage;