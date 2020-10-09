// adapted from https://codesandbox.io/s/github/reduxjs/redux-essentials-example-app/tree/checkpoint-3-postRequests/?from-embed=&file=/src/api/client.js:0-987

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import profilePicture from "../../images/Node/profilePicture.png";
import { Card, CardContent, CardMedia, Typography, Grid, Avatar } from "@material-ui/core";
import CardStyles from "./CardStyle"
import { NodeContent } from './NodeContent'
import { selectAllNodes, fetchNodes } from './NodesSlice'
import { BusinessDetail } from '../../app/BusinessDetail';

// card for each node item
const NodeExcerpt = ({ node }) => {
    const classes = CardStyles();

    function changeStatusFontColor(status) {    
        switch (status) {
            case 'activate':
                return classes.statusActivate;
            case 'claimed':
                return classes.statusClaimed;
            case 'submit':
                return classes.statusSubmit;
            default:
                return classes.statusSubmit;;
        }
    }

    return (
        <Grid item xs={12} lg={6}>
            <Card className={classes.root} variant="outlined" key={node.nodeId}>
                <Grid container>
                    <Grid item xs={12} lg={2}>
                        <CardMedia>
                            <Avatar alt="Profile Picture" src={profilePicture} className={classes.avatar} />
                        </CardMedia>
                    </Grid>
                    <Grid item xs={12} lg={10}>
                        <CardContent>
                            <Grid container justify="space-between">
                                <Typography inline="true" variant="h6" component="h6" align="left" className={classes.name}>
                                    @{node.name}-{node.handler}
                                </Typography>
                                <Typography inline="true" variant="h6" component="h6" align="right" className={changeStatusFontColor(node.status)}>
                                    {node.status}
                                </Typography>
                            </Grid>
                            <br/>
                            <NodeContent datetime_string={node.date} content={node.nodeId + node.businessId} />
                        </CardContent>
                    </Grid>
                </Grid>
            </Card>
        </Grid>
    )
}

export const CardList = () => {
    const dispatch = useDispatch()
    const nodes = useSelector(selectAllNodes)

    const nodeStatus = useSelector((state) => state.nodes.status)
    const error = useSelector((state) => state.nodes.error)

    useEffect(() => {
        if (nodeStatus === 'idle') {
            dispatch(fetchNodes(BusinessDetail.businessId))
        }
    }, [nodeStatus, dispatch])

    let content

    if (nodeStatus === 'loading') {
        console.log(nodeStatus)
        content = <div className="loader">Loading...</div>
    } else if (nodeStatus === 'succeeded') {
        // Sort nodes in reverse chronological order by datetime string
        const orderedNodes = nodes
            .slice()
            .sort((a, b) => b.date.localeCompare(a.date))

        content = orderedNodes.map((node) => (
            <NodeExcerpt key={node.nodeId} node={node} />
        ))
    } else if (nodeStatus === 'error') {
        content = <div>{error}</div>
    }

    return (
        <Grid
        container
        spacing={4}
        justify="center"
      >
          {content}
      </Grid>
    )
}

export default CardList;