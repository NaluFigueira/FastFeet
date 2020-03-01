import Mail from "../../lib/Mail";

class OrderCanceledMail {
  get key() {
    return "OrderCanceledMail";
  }

  async handle({ data }) {
    const { deliveryman, id } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: "Encomenda pronta para ser retirada",
      template: "orderCanceled",
      context: {
        id,
        deliveryman_name: deliveryman.name,
      },
    });
  }
}

export default new OrderCanceledMail();
