import "./addBook.css"
import { Button, Modal, Input, Rate } from "antd"

const AddBook = () => {
    return (
        <div>
            <Button
                size="large"
                // onClick={()=> }
                >
                Add New Book
            </Button>
            <Modal
                title="Add New Book"
                // visible={}
                // onCancel={}
                // onOk={}
                >
                <Input 
                    style={{ margin: 10}}
                    placeholder="Book Title"
                    size="large"
                    // onChange={(evt) => }
                    // value={}
                    />
                <Input 
                    style={{ margin: 10}}
                    placeholder="Book Author"
                    size="large"
                    // onChange={(evt) => }
                    // value={}
                    />
                <Input 
                    style={{ margin: 10}}
                    placeholder="Book Description"
                    size="large"
                    // onChange={(evt) => }
                    // value={}
                    />
                <Rate 
                    style={{ margin: 10}}
                     // onChange={(evt) => }
                    // value={}
                    />
            </Modal>
        </div>
    )
}

export default AddBook