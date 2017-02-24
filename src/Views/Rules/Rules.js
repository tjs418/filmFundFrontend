/**
 * Created by andrew on 2/4/17.
 */

import React, { PropTypes as T } from 'react'
import {Grid, Row, Col, PanelGroup, Panel, PageHeader} from 'react-bootstrap'
import './Rules.css'

export class Rules extends React.Component {
    static contextTypes = {
        router: T.object,
    }

    render() {

        return (
            <div className="root">
                <Grid>
                    <Row>
                        <Col>
                            <PanelGroup>
                                <Panel header={<PageHeader>Official Rules and Terms of Service</PageHeader>}>

                                    <PageHeader><small>Coming soon</small></PageHeader>
                                </Panel>
                            </PanelGroup>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
export default Rules

