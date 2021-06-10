import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    return (
        <Box p={3} role="tabpanel">
            <Typography component={'span'}>{props.children}</Typography>
        </Box>
    );
}

function a11yProps(index) {
  return {
    'id': `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex'
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

function VerticalTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(props.location.pathname);

    const handleChange = (event, newValue) => {
		props.history.push(`${newValue}`)
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label="Orders" value="/orders" {...a11yProps(0)} />
                <Tab label="Tours" value="/tours" {...a11yProps(1)} />
                <Tab label="Hotels" value="/hotels" {...a11yProps(2)} />
                <Tab label="Clients" value="/clients" {...a11yProps(3)} />
            </Tabs>
            <TabPanel>
                {props.children}
            </TabPanel>
        </div>
    );
}

const mapStateToProps = state => ({
	clients: state.clients
})

export default withRouter(connect(mapStateToProps)(VerticalTabs))
