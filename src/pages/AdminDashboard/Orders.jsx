import { Delete, Edit } from "@mui/icons-material";
import {
    Box,
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";

const Orders = () => {
    return (
        <Box
            sx={{
                width: "100%",
                px: "20px",
                py: "30px",
                height: "100%",
                overflowY: "auto",
                overflowX: "hidden",
            }}
        >
            <Box
                sx={{
                    pb: "5px",
                    borderBottom: "2px solid #e4e2e2",
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: "30px",
                        fontWeight: "bold",
                        letterSpacing: "0.3px",
                    }}
                >
                    All Orders
                </Typography>
            </Box>
            <Box mt={2}>
                <TextField
                    sx={{
                        "& div, & input": {
                            borderRadius: "0",
                        },
                    }}
                    placeholder="Search Orders"
                    size="small"
                    fullWidth
                />
            </Box>
            <Box>
                <Box
                    mt={2}
                    sx={{
                        maxWidth: {
                            xs: "74vw",
                            md: "80vw",
                        },
                        display: "flex",
                        justifyContent: "flex-start",
                    }}
                >
                    <TableContainer
                        component={Paper}
                        sx={{
                            width: "100%",
                            overflowX: "auto",
                            borderRadius: "0",
                        }}
                        elevation={4}
                    >
                        <Table sx={{ minWidth: 850 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        sx={{
                                            width: "50px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        S.No.
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            fontWeight: "bold",
                                            width: "100px",
                                        }}
                                    >
                                        Image
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            fontWeight: "bold",
                                            width: "25%",
                                        }}
                                    >
                                        Name
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Price
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Order Id
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Paid
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Delivered
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Actions
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        1
                                    </TableCell>
                                    <TableCell align="center">
                                        <img
                                            style={{
                                                height: "60px",
                                                width: "60px",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                            }}
                                            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
                                            alt=""
                                        />
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            maxWidth: "250px",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        Very Long product namenamenamenamename
                                    </TableCell>
                                    <TableCell align="left">₹123</TableCell>
                                    <TableCell align="left">
                                        123SKDJFH
                                    </TableCell>
                                    <TableCell align="left">Not Paid</TableCell>
                                    <TableCell align="left">
                                        Not Delivered
                                    </TableCell>
                                    <TableCell align="left">
                                        <IconButton
                                            sx={{
                                                bgcolor: "#17b417",
                                                borderRadius: "0",
                                                color: "white",
                                                ":hover": {
                                                    bgcolor: "#0d7c0d",
                                                },
                                            }}
                                        >
                                            <Edit />
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                bgcolor: "#dc153b",
                                                borderRadius: "0",
                                                color: "white",
                                                ":hover": {
                                                    bgcolor: "#c61133",
                                                },
                                            }}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        1
                                    </TableCell>
                                    <TableCell align="center">
                                        <img
                                            style={{
                                                height: "60px",
                                                width: "60px",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                            }}
                                            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
                                            alt=""
                                        />
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            maxWidth: "250px",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        Very Long product namenamenamenamename
                                    </TableCell>
                                    <TableCell align="left">₹123</TableCell>
                                    <TableCell align="left">
                                        123SKDJFH
                                    </TableCell>
                                    <TableCell align="left">Not Paid</TableCell>
                                    <TableCell align="left">
                                        Not Delivered
                                    </TableCell>
                                    <TableCell align="left">
                                        <IconButton
                                            sx={{
                                                bgcolor: "#17b417",
                                                borderRadius: "0",
                                                color: "white",
                                                ":hover": {
                                                    bgcolor: "#0d7c0d",
                                                },
                                            }}
                                        >
                                            <Edit />
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                bgcolor: "#dc153b",
                                                borderRadius: "0",
                                                color: "white",
                                                ":hover": {
                                                    bgcolor: "#c61133",
                                                },
                                            }}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        1
                                    </TableCell>
                                    <TableCell align="center">
                                        <img
                                            style={{
                                                height: "60px",
                                                width: "60px",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                            }}
                                            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
                                            alt=""
                                        />
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            maxWidth: "250px",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        Very Long product namenamenamenamename
                                    </TableCell>
                                    <TableCell align="left">₹123</TableCell>
                                    <TableCell align="left">
                                        123SKDJFH
                                    </TableCell>
                                    <TableCell align="left">Not Paid</TableCell>
                                    <TableCell align="left">
                                        Not Delivered
                                    </TableCell>
                                    <TableCell align="left">
                                        <IconButton
                                            sx={{
                                                bgcolor: "#17b417",
                                                borderRadius: "0",
                                                color: "white",
                                                ":hover": {
                                                    bgcolor: "#0d7c0d",
                                                },
                                            }}
                                        >
                                            <Edit />
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                bgcolor: "#dc153b",
                                                borderRadius: "0",
                                                color: "white",
                                                ":hover": {
                                                    bgcolor: "#c61133",
                                                },
                                            }}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>{" "}
                                <TableRow
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        1
                                    </TableCell>
                                    <TableCell align="center">
                                        <img
                                            style={{
                                                height: "60px",
                                                width: "60px",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                            }}
                                            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
                                            alt=""
                                        />
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            maxWidth: "250px",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        Very Long product namenamenamenamename
                                    </TableCell>
                                    <TableCell align="left">₹123</TableCell>
                                    <TableCell align="left">
                                        123SKDJFH
                                    </TableCell>
                                    <TableCell align="left">Not Paid</TableCell>
                                    <TableCell align="left">
                                        Not Delivered
                                    </TableCell>
                                    <TableCell align="left">
                                        <IconButton
                                            sx={{
                                                bgcolor: "#17b417",
                                                borderRadius: "0",
                                                color: "white",
                                                ":hover": {
                                                    bgcolor: "#0d7c0d",
                                                },
                                            }}
                                        >
                                            <Edit />
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                bgcolor: "#dc153b",
                                                borderRadius: "0",
                                                color: "white",
                                                ":hover": {
                                                    bgcolor: "#c61133",
                                                },
                                            }}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        1
                                    </TableCell>
                                    <TableCell align="center">
                                        <img
                                            style={{
                                                height: "60px",
                                                width: "60px",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                            }}
                                            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
                                            alt=""
                                        />
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            maxWidth: "250px",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        Very Long product namenamenamenamename
                                    </TableCell>
                                    <TableCell align="left">₹123</TableCell>
                                    <TableCell align="left">
                                        123SKDJFH
                                    </TableCell>
                                    <TableCell align="left">Not Paid</TableCell>
                                    <TableCell align="left">
                                        Not Delivered
                                    </TableCell>
                                    <TableCell align="left">
                                        <IconButton
                                            sx={{
                                                bgcolor: "#17b417",
                                                borderRadius: "0",
                                                color: "white",
                                                ":hover": {
                                                    bgcolor: "#0d7c0d",
                                                },
                                            }}
                                        >
                                            <Edit />
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                bgcolor: "#dc153b",
                                                borderRadius: "0",
                                                color: "white",
                                                ":hover": {
                                                    bgcolor: "#c61133",
                                                },
                                            }}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        1
                                    </TableCell>
                                    <TableCell align="center">
                                        <img
                                            style={{
                                                height: "60px",
                                                width: "60px",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                            }}
                                            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
                                            alt=""
                                        />
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            maxWidth: "250px",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        Very Long product namenamenamenamename
                                    </TableCell>
                                    <TableCell align="left">₹123</TableCell>
                                    <TableCell align="left">
                                        123SKDJFH
                                    </TableCell>
                                    <TableCell align="left">Not Paid</TableCell>
                                    <TableCell align="left">
                                        Not Delivered
                                    </TableCell>
                                    <TableCell align="left">
                                        <IconButton
                                            sx={{
                                                bgcolor: "#17b417",
                                                borderRadius: "0",
                                                color: "white",
                                                ":hover": {
                                                    bgcolor: "#0d7c0d",
                                                },
                                            }}
                                        >
                                            <Edit />
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                bgcolor: "#dc153b",
                                                borderRadius: "0",
                                                color: "white",
                                                ":hover": {
                                                    bgcolor: "#c61133",
                                                },
                                            }}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                                <TableRow
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell component="th" scope="row">
                                        1
                                    </TableCell>
                                    <TableCell align="center">
                                        <img
                                            style={{
                                                height: "60px",
                                                width: "60px",
                                                objectFit: "cover",
                                                objectPosition: "center",
                                            }}
                                            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D"
                                            alt=""
                                        />
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            maxWidth: "250px",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        Very Long product namenamenamenamename
                                    </TableCell>
                                    <TableCell align="left">₹123</TableCell>
                                    <TableCell align="left">
                                        123SKDJFH
                                    </TableCell>
                                    <TableCell align="left">Not Paid</TableCell>
                                    <TableCell align="left">
                                        Not Delivered
                                    </TableCell>
                                    <TableCell align="left">
                                        <IconButton
                                            sx={{
                                                bgcolor: "#17b417",
                                                borderRadius: "0",
                                                color: "white",
                                                ":hover": {
                                                    bgcolor: "#0d7c0d",
                                                },
                                            }}
                                        >
                                            <Edit />
                                        </IconButton>
                                        <IconButton
                                            sx={{
                                                bgcolor: "#dc153b",
                                                borderRadius: "0",
                                                color: "white",
                                                ":hover": {
                                                    bgcolor: "#c61133",
                                                },
                                            }}
                                        >
                                            <Delete />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Box>
    );
};

export default Orders;
