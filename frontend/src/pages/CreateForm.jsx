import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import CloseButton from "react-bootstrap/CloseButton";

import { endpoint } from "src/api/utils.js";
import { useState } from "react";

function CreateForm() {
	const [questions, setQuestions] = useState([
		{ id: 1, title: "Question #1", type: "string" },
	]);
	const [newQuestion, setNewQuestion] = useState("");
	const [newQuestionType, setNewQuestionType] = useState("");

	const addQuestion = () => {
		if (!newQuestion) return;

		setQuestions((oldQuestions) => {
			return [...oldQuestions, {
				id: oldQuestions.length + 1,
				title: newQuestion,
				type: newQuestionType,
			}]
		})

		setNewQuestion("");
	};

	const removeQuestion = (questionId) => {
		setQuestions((oldQuestions) => {
			return oldQuestions.filter((question) => question.id !== questionId);
		})
	}

	return (
		<Form
			action={ endpoint("/auth/login") }
			method="post"
		>
			<Container className="p-5">
				<Row className="justify-content-center">
					<Col xs={12} md={6}>
						<h1 className="text-center">Create Form</h1>

						<Form.Group controlId="title">
							<Form.Label>Title:</Form.Label>
							<Form.Control
								type="text"
								required
							/>
						</Form.Group>

						<hr />

						{ questions.map((question) => {
							return <div className="d-flex justify-content-between" key={question.id}>
								<span>{ question.title }</span>

								<div className="d-flex gap-2">
									<span className="small">{ question.type }</span>
									<CloseButton onClick={() => removeQuestion(question.id)} />
								</div>
							</div>
						}) }

						<hr />

						<div className="d-flex flex-column gap-3">
							<Form.Group controlId="new-question">
								<Form.Label>New question:</Form.Label>
								<Form.Control
									type="text"
									value={newQuestion}
									onChange={(e) => setNewQuestion(e.target.value)}
									onKeyDown={(e) => {
										if (e.key === "Enter") addQuestion();
									}}
								/>
							</Form.Group>

							<Form.Select onChange={(e) => setNewQuestionType(e.target.value)}>
								<option value="string">String</option>
								<option disabled>More options coming soon...</option>
							</Form.Select>

							<Button className="w-100" onClick={addQuestion}>Add question</Button>
						</div>

						<hr />

						<Button
							type="submit"
					        variant="outline-primary"
					        className="w-100"

						>Create</Button>
					</Col>
				</Row>
			</Container>
		</Form>
	)
}

export default CreateForm;