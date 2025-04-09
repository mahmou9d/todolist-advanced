import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import CheckIcon from "@mui/icons-material/Check";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import { useTodosDispatch } from "../contexts/todosContext";
import { useToast } from "../contexts/ToastContext";

export default function Todo({ todo, showDelete, showUpdate }) {
	const dispatch = useTodosDispatch();
	// @ts-ignore
	const { showHideToast } = useToast();
	// EVENT HANDLERS
	function handleCheckClick() {
		dispatch({ type: "toggledCompleted", payload: todo });
		showHideToast("تم التعديل بنجاح");
	}

	function handleDeleteClick() {
		showDelete(todo);
	}

	function handleUpdateClick() {
		showUpdate(todo);
	}

	// ====== EVENT HANDLERS ======
	return (
		<>
			<Card
				className="todoCard"
				sx={{
					minWidth: 275,
					background: "#000000",
					color: "white",
					marginTop: 5,
          boxShadow: "0 0 9px 0px #00ffbd",
				}}
			>
				<CardContent>
					<Grid container spacing={2}>
						<Grid xs={8}>
							<Typography
								variant="h5"
								sx={{
									textAlign: "right",
									textDecoration: todo.isCompleted
										? "line-through"
										: "none",
								}}
							>
								{todo.title}
							</Typography>

							<Typography
								variant="h6"
								sx={{ textAlign: "right" }}
							>
								{todo.details}
							</Typography>
						</Grid>

						{/* ACTION BUTTONS */}
						<Grid
							xs={4}
							display="flex"
							justifyContent="space-around"
							alignItems="center"
						>
							{/* CHECK ICON BUTTON */}
							<IconButton
								onClick={() => {
									handleCheckClick();
								}}
								className="iconButton"
								aria-label="delete"
								style={{
									color: todo.isCompleted
										? "white"
										: "#8bc34a",
									background: todo.isCompleted
										? "#8bc34a"
										: "white",
									border: "solid #8bc34a 3px",
                  boxShadow: "0 0 9px 0px #00ffbd",
								}}
							>
								<CheckIcon />
							</IconButton>
							{/*== CHECK ICON BUTTON ==*/}

							{/* UPDATE BUTTON */}
							<IconButton
								onClick={handleUpdateClick}
								className="iconButton"
								aria-label="delete"
								style={{
									color: "#1769aa",
									background: "white",
									border: "solid #1769aa 3px",
                  boxShadow: "0 0 9px 0px #00ffbd",
								}}
							>
								<ModeEditOutlineOutlinedIcon />
							</IconButton>
							{/*== UPDATE BUTTON ==*/}

							{/* DELETE BUTTON */}
							<IconButton
								className="iconButton"
								aria-label="delete"
								style={{
									color: "#b23c17",
									background: "white",
									border: "solid #b23c17 3px",
                  boxShadow: "0 0 9px 0px #00ffbd",
								}}
								onClick={handleDeleteClick}
							>
								<DeleteOutlineOutlinedIcon />
							</IconButton>
							{/*=== DELETE BUTTON ===*/}
						</Grid>
						{/*== ACTION BUTTONS ==*/}
					</Grid>
				</CardContent>
			</Card>
		</>
	);
}