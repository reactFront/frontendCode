import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const AddVenu = () => {
    return ( <
        Container fluid >
        <
        Row className = 'justify-content-center' >
        <
        Col className = 'my-5 pe-5 ps-5 col-md-10 bg-light' >
        <
        div className = "page-header mt-5" >
        <
        h2 > Add Venu < /h2> <
        /div> <
        h4 > Venu Information < /h4> <
        Form >
        <
        Row >
        <
        Col className = "col-md-6"
        md = { 6 } >
        <
        Form.Group className = "mb-3" >
        <
        Form.Label > Address < /Form.Label> <
        Form.Control type = "text"
        placeholder = "Enter address" / >
        <
        /Form.Group> <
        /Col> <
        Col className = "col-md-6"
        md = { 6 } >
        <
        Form.Group className = "mb-3" >
        <
        Form.Label > City < /Form.Label> <
        Form.Control type = "text"
        placeholder = "Enter City" / >
        <
        /Form.Group> <
        /Col> <
        Col className = "col-md-6"
        md = { 6 } >

        <
        Form.Group className = "mb-3" >
        <
        Form.Label > Country < /Form.Label> <
        Form.Control type = "text"
        placeholder = "Enter Country" / >
        <
        /Form.Group> <
        /Col> <
        Col className = "col-md-6"
        md = { 6 } >
        <
        Form.Group className = "mb-3" >
        <
        Form.Label > Website < /Form.Label> <
        Form.Control type = "text"
        placeholder = "Enter Website" / >
        <
        /Form.Group> <
        /Col> <
        Col className = "col-md-6"
        md = { 6 } >
        <
        Form.Group className = "mb-3" >
        <
        Form.Label > Reservation Widget Link < /Form.Label> <
        Form.Control type = "text"
        placeholder = "Enter Link" / >
        <
        /Form.Group> <
        /Col> <
        /Row> <
        h4 > Social Media Link < /h4> <
        Row >
        <
        Col className = "col-md-6" >
        <
        Form.Group className = "mb-3" >
        <
        Form.Label > Facebook < /Form.Label> <
        Form.Control type = "text"
        placeholder = "Enter address" / >
        <
        /Form.Group> <
        /Col> <
        Col className = "col-md-6" >
        <
        Form.Group className = "mb-3" >
        <
        Form.Label > Instagram < /Form.Label> <
        Form.Control type = "text"
        placeholder = "Enter address" / >
        <
        /Form.Group> <
        /Col> <
        Col className = "col-md-6" >

        <
        Form.Group className = "mb-3" >
        <
        Form.Label > Twitter < /Form.Label> <
        Form.Control type = "text"
        placeholder = "Enter address" / >
        <
        /Form.Group> <
        /Col> <
        Col className = "col-md-6" >

        <
        Form.Group className = "mb-3" >
        <
        Form.Label > Snapchat < /Form.Label> <
        Form.Control type = "text"
        placeholder = "Enter address" / >
        <
        /Form.Group> <
        /Col> <
        /Row> <
        Button className = "mb-5"
        variant = "primary"
        type = "submit" >
        Save <
        /Button> <
        /Form>

        <
        /Col> <
        /Row> <
        /Container>
    )
}
export default AddVenu;