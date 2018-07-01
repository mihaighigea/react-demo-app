import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const DemoTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    },
}))(TableCell);

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        width: '98%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2
    },
    table: {
        minWidth: 700
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default
        }
    },
    progress: {
        margin: theme.spacing.unit * 2,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    }
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class Page extends React.Component {

    render() {
        const {classes, items, isLoading, error} = this.props;
        return (
            <div>
                <Paper className={classes.root} elevation={1}>
                    <Typography variant="headline" component="h3">
                        Demo #1
                    </Typography>
                    <Typography component="p">
                        Description
                    </Typography>
                </Paper>
                { isLoading &&
                <CircularProgress className={classes.progress} />
                }
                { !isLoading &&
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <DemoTableCell>Dessert (100g serving)</DemoTableCell>
                                <DemoTableCell numeric>Calories</DemoTableCell>
                                <DemoTableCell numeric>Fat (g)</DemoTableCell>
                                <DemoTableCell numeric>Carbs (g)</DemoTableCell>
                                <DemoTableCell numeric>Protein (g)</DemoTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map(n => {
                                return (
                                    <TableRow className={classes.row} key={n.id}>
                                        <DemoTableCell component="th" scope="row">
                                            {n.name}
                                        </DemoTableCell>
                                        <DemoTableCell numeric>{n.calories}</DemoTableCell>
                                        <DemoTableCell numeric>{n.fat}</DemoTableCell>
                                        <DemoTableCell numeric>{n.carbs}</DemoTableCell>
                                        <DemoTableCell numeric>{n.protein}</DemoTableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </Paper>
                }
            </div>
        );
    }
}

Page.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Page);
