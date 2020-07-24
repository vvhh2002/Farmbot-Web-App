import * as React from "react";
import { Col, Row } from "../../ui";
import { DangerousDeleteProps, DangerousDeleteState } from "./interfaces";
import { BlurablePassword } from "../../ui/blurable_password";
import { t } from "../../i18next_wrapper";
import { DeviceSetting } from "../../constants";

/** Widget for permanently deleting large amounts of user data. */
export class DangerousDeleteWidget extends
  React.Component<DangerousDeleteProps, DangerousDeleteState> {
  state: DangerousDeleteState = { password: "" };

  componentWillUnmount() {
    this.setState({ password: "" });
  }

  onClick = () =>
    this.props.dispatch(this.props.onClick({ password: this.state.password }));

  render() {
    return <Row className={"zero-side-margins"}>
      <label>
        {t(DeviceSetting.resetAccount)}
      </label>
      <p>
        {t(this.props.warning)}
        <br /><br />
        {t(this.props.confirmation)}
        <br /><br />
      </p>
      <form>
        <Row>
          <Col xs={12}>
            <label>
              {t("Enter Password")}
            </label>
          </Col>
          <Col xs={8}>
            <BlurablePassword
              onCommit={e =>
                this.setState({ password: e.currentTarget.value })} />
          </Col>
          <Col xs={4}>
            <button
              onClick={this.onClick}
              className="red fb-button"
              title={t(this.props.title)}
              type="button">
              {t(this.props.title)}
            </button>
          </Col>
        </Row>
      </form>
    </Row>;
  }
}