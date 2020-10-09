import React from 'react';
import { Grid, Box, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const TypographyStyle = withStyles({
    root: {
        wordWrap: "break-word"
    }
})(Typography);

// format datetime string "2020-10-02 00:00:00" to "Oct 02, 2020"
function formatDatetime (datetime_string){
    let dateformat = ''
    if (datetime_string) {

        const datetime = new Date(datetime_string)
        dateformat = datetime.toString().substring(4, 10) + ", " + datetime.toString().substring(11, 15);
    }
    return dateformat;
}

export const NodeContent = ({ datetime_string, content }) => {
    
    // format content
    let dateformat = formatDatetime(datetime_string)
    let contentFormat = content.match(/.{1,5}/g).join(' ')

    return (
        <Grid container>
            <Box color="text.primary" display="inline" flexWrap="wrap" >
                <TypographyStyle>
                    <span className="dateBold">{dateformat}</span>&nbsp;-&nbsp;{contentFormat}
                </TypographyStyle>
            </Box>
        </Grid>
    )
}