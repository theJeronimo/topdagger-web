import React from 'react'
import { Header, Grid, Segment, Icon } from 'semantic-ui-react';


class PlayerCard extends React.Component {
    render() {
        return (
            <Segment color="teal" container>
                <Grid>

                  <Grid.Row textAlign="center" centered>
                      <Header size="large" icon>
                        <Icon name="user" size="huge"/>
                        Joe Daggs
                        <Header.Subheader>Team Dagger 3</Header.Subheader>
                      </Header>
                  </Grid.Row>

                  <Grid.Row  columns="3">
                    <Grid.Column textAlign="center">
                      <Header size="large">
                        94
                        <Header.Subheader>off</Header.Subheader>
                      </Header>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                      <Header size="large">
                        89
                        <Header.Subheader>def</Header.Subheader>
                      </Header>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                      <Header size="large">
                        92
                        <Header.Subheader>ovr</Header.Subheader>
                      </Header>
                    </Grid.Column>
                  </Grid.Row>

                </Grid>
              </Segment>
        );
    }
}

export default PlayerCard;