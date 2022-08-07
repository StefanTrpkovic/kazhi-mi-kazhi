import React from "react";

export default class AdComponent extends React.Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-1717475760191241"
        data-ad-slot="1717475760191241"
        data-ad-format="auto"
      />
    );
  }
}
