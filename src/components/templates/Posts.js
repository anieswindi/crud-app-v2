import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import '../../assets/css/posts.css';
import {
	BsFillTrashFill,
	BsPencilFill,
	BsFillPlusCircleFill,
} from 'react-icons/bs';
import { ModalAddPost } from '../modules';
import {
	addPost,
	deletePost,
	getPostDetails,
	getPosts,
	patchPost,
} from '../../store/posts/actions';

export default function Posts(props) {
	let dispatch = useDispatch();
	const { posts, loadingPosts } = useSelector((state) => state.PostReducer);
	const { post, loadingPostsAdd } = useSelector((state) => state.PostReducer);
	const [typeModal, setTypeModal] = useState('add');
	const [dataForm, setDataForm] = useState({});
	let data;

	const [showModalAdd, setShowModalAdd] = useState(false);

	const handleShowModalAdd = () => {
		setShowModalAdd(true);
	};

	const handleShowModalUpdate = async (id) => {
		await setTypeModal('update');
		await setShowModalAdd(true);

		let filter = await posts.filter((item) => item.id == id);
		if (filter[0]) {
			setDataForm(filter[0]);
			data = filter[0];
		}
	};

	const handleCloseModalAdd = () => setShowModalAdd(false);

	const handleAcceptForm = (data, id) => {
		if (id) {
			let dataUpdate = {
				id: id,
				body: data,
			};
			console.log(dataUpdate);
			dispatch(patchPost(dataUpdate));
		} else {
			let dataFinal = {
				title: data.title,
				body: data.body,
				userId: 1,
			};
			dispatch(addPost(dataFinal));
		}

		handleCloseModalAdd();
	};

	const handleDelete = (id) => {
		console.log(id);
		dispatch(deletePost(id));
	};

	console.log('posts !', posts);

	return (
		<Container>
			{loadingPosts ? (
				<div className="loader">
					<Loader
						type="Bars"
						color="#00BFFF"
						height={50}
						width={100}
						timeout={3000} //3 secs
					/>
				</div>
			) : (
				<>
					<div className="block__action">
						<Button variant="primary" onClick={handleShowModalAdd}>
							<BsFillPlusCircleFill /> Add Post
						</Button>
					</div>
					<div className="block__data">
						{posts &&
							posts.length > 0 &&
							posts.map((item, i) => {
								return (
									<Row
										className="posts"
										key={'Posts index -' + i}
									>
										<Col lg={8} md={10} sm={12}>
											<Card>
												<div className="icon">
													<BsFillTrashFill
														onClick={() =>
															handleDelete(
																item.id
																	? item.id
																	: item.userId
															)
														}
													/>
													<BsPencilFill
														onClick={() =>
															handleShowModalUpdate(
																item.id
																	? item.id
																	: item.userId
															)
														}
													/>
												</div>
												<Link
													to={`/${
														item.id
															? item.id
															: item.userId
													}`}
												>
													<Card.Body>
														<Card.Title>
															{item.title}
														</Card.Title>

														<Card.Text>
															{item.body}
														</Card.Text>
													</Card.Body>
												</Link>
											</Card>
										</Col>
									</Row>
								);
							})}
						{/* {posts.id && posts
							? posts.map((item) => {
									return (
										<Row className="posts">
											<Col lg={8} md={10} sm={12}>
												<Card>
													<div className="icon">
														<BsFillTrashFill
															onClick={() =>
																handleDelete(
																	item.id
																		? item.id
																		: item.userId
																)
															}
														/>
														<BsPencilFill
															onClick={() =>
																handleShowModalUpdate(
																	item.id
																		? item.id
																		: item.userId
																)
															}
														/>
													</div>
													<Link
														to={`/${
															item.id
																? item.id
																: item.userId
														}`}
													>
														<Card.Body>
															<Card.Title>
																{item.title}
															</Card.Title>

															<Card.Text>
																{item.body}
															</Card.Text>
														</Card.Body>
													</Link>
												</Card>
											</Col>
										</Row>
									);
							  })
							: 
							(
							  	<div>
							  		<Row className="posts">
							  			<Col lg={8} md={10} sm={12}>
							  				<Card>
							  					<div className="icon">
							  						<BsFillTrashFill />
							  						<BsPencilFill />
							  					</div>

							  					<Card.Body>
							  						<Link to={`/${post.id}`}>
							  							<Card.Title>
							  								{post.title}
							  							</Card.Title>
							  						</Link>

							  						<Card.Text>
							  							{post.body}
							  						</Card.Text>
							  					</Card.Body>
							  				</Card>
							  			</Col>
							  		</Row>
							  	</div>
							  )

							  posts.map((item) => {
									return (
										<Row className="posts">
											<Col lg={8} md={10} sm={12}>
												<Card>
													<div className="icon">
														<BsFillTrashFill
															onClick={() =>
																handleDelete(
																	item.id
																)
															}
														/>
														<BsPencilFill
															onClick={() =>
																handleShowModalUpdate(
																	item.id
																)
															}
														/>
													</div>
													<Link to={`/${item.id}`}>
														<Card.Body>
															<Card.Title>
																{item.title}
															</Card.Title>

															<Card.Text>
																{item.body}
															</Card.Text>
														</Card.Body>
													</Link>
												</Card>
											</Col>
										</Row>
									);
							  })} */}
					</div>
				</>
			)}
			<ModalAddPost
				data={dataForm}
				type={typeModal}
				open={showModalAdd}
				onHide={handleCloseModalAdd}
				onAccept={handleAcceptForm}
			/>
		</Container>
	);
}
