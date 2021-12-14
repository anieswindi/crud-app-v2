import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class ModalAddPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataForm: {
				title: '',
				body: '',
			},
		};
	}

	handleChange(e, key) {
		const { value } = e.target;
		this.setState((state) => ({
			dataForm: {
				...state.dataForm,
				[key]: value,
			},
		}));
	}

	handleSubmit() {
		this.props.onAccept(this.state.dataForm);
	}

	render() {
		const {
			props: { open, onHide },
		} = this;
		return (
			<Modal
				show={open}
				onHide={onHide}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>Add Post</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Title of post"
								onChange={(e) => this.handleChange(e, 'title')}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formContent">
							<Form.Label>Content</Form.Label>
							<Form.Control
								type="text"
								placeholder="Content to post"
								onChange={(e) => this.handleChange(e, 'body')}
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={onHide}>
						Close
					</Button>
					<Button
						variant="primary"
						onClick={this.handleSubmit.bind(this)}
					>
						Add
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default ModalAddPost;
