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

	componentDidUpdate(prevState, prevProps) {
		if (prevProps.data !== this.props.data) {
			this.setState({
				data: this.props.data,
			});
		}
	}

	componentDidMount() {
		this.assignProps();
	}

	assignProps() {
		let data = { ...(this.props.data || {}) };
		this.setState({
			data,
		});
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

	handleSubmit(type) {
		const {
			state: { data, dataForm },
		} = this;
		if (type == 'update') {
			this.setState(
				(prevState) => ({
					data: {
						...prevState.data,
						body:
							prevState.data.body !== dataForm.body
								? dataForm.body
								: prevState.data.body,
						title:
							prevState.data.title !== dataForm.title
								? dataForm.title
								: prevState.data.title,
					},
				}),
				() => {
					console.log(this.state.data);
				}
			);

			this.props.onAccept(data, data.id);
		} else {
			// console.log(this.state.dataForm)
			this.props.onAccept(this.state.dataForm);
		}
	}

	render() {
		const {
			state: { data },
			props: { open, onHide, type },
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
					<Modal.Title>
						{type === 'add' ? 'Add Post' : 'Update Post'}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="formTitle">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Title of post"
								onChange={(e) => this.handleChange(e, 'title')}
								defaultValue={data && data.title}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formContent">
							<Form.Label>Content</Form.Label>
							<Form.Control
								as="textarea"
								placeholder="Content of post"
								style={{ height: '100px' }}
								onChange={(e) => this.handleChange(e, 'body')}
								defaultValue={data && data.body}
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
						onClick={this.handleSubmit.bind(this, type)}
					>
						{type === 'add' ? 'Add' : 'Update'}
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default ModalAddPost;
