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
import { addPost, getPostDetails, getPosts } from '../../store/posts/actions';

export default function Posts(props) {
	let dispatch = useDispatch();
	const { posts, loadingPosts } = useSelector((state) => state.PostReducer);
	const { post, loadingPostsAdd } = useSelector((state) => state.PostReducer);

	const [showModalAdd, setShowModalAdd] = useState(false);

	const handleShowModalAdd = () => setShowModalAdd(true);

	const handleCloseModalAdd = () => setShowModalAdd(false);

	const handleAcceptForm = (data) => {
		let dataFinal = {
			title: data.title,
			body: data.body,
			userId: 1,
		};
		dispatch(addPost(dataFinal));
		handleCloseModalAdd();
	};

	useEffect(() => {
		console.log('useEffect', posts);
		// dispatch(getPosts());
	}, [posts.id]);

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
						{posts.id && post ? (
							<div>
								<Row className="posts">
									<Col lg={8} md={10} sm={12}>
										<Link to={`/${post.id}`}>
											<Card>
												<div className="icon">
													<BsFillTrashFill />
													<BsPencilFill />
												</div>

												<Card.Body>
													<Card.Title>
														{post.title}
													</Card.Title>

													<Card.Text>
														{post.body}
													</Card.Text>
												</Card.Body>
											</Card>
										</Link>
									</Col>
								</Row>
								{/* {posts &&
									posts.map((item) => {
										return (
											<Row className="posts">
												<Col lg={8} md={10} sm={12}>
													<Link to={`/${item.id}`}>
														<Card>
															<div className="icon">
																<BsFillTrashFill />
																<BsPencilFill />
															</div>

															<Card.Body>
																<Card.Title>
																	{item.title}
																</Card.Title>

																<Card.Text>
																	{item.body}
																</Card.Text>
															</Card.Body>
														</Card>
													</Link>
												</Col>
											</Row>
										);
									})} */}
							</div>
						) : (
							posts.map((item) => {
								return (
									<Row className="posts">
										<Col lg={8} md={10} sm={12}>
											<Link to={`/${item.id}`}>
												<Card>
													<div className="icon">
														<BsFillTrashFill />
														<BsPencilFill />
													</div>

													<Card.Body>
														<Card.Title>
															{item.title}
														</Card.Title>

														<Card.Text>
															{item.body}
														</Card.Text>
													</Card.Body>
												</Card>
											</Link>
										</Col>
									</Row>
								);
							})
						)}
					</div>
				</>
			)}
			<ModalAddPost
				open={showModalAdd}
				onHide={handleCloseModalAdd}
				onAccept={handleAcceptForm}
			/>
		</Container>
	);
}
