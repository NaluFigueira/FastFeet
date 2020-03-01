import Mail from "../../lib/Mail";

class OrderCreatedMail {
  get key() {
    return "OrderCreatedMail";
  }

  async handle({ data }) {
    const { deliveryman, order, recipient, product } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: "Encomenda pronta para ser retirada",
      template: "orderCreated",
      context: {
        id: order.id,
        deliveryman_name: deliveryman.name,
        product_name: product,
        recipient_name: recipient.name,
        street: recipient.street,
        number: recipient.number,
        additional_address: recipient.additional_address,
        city: recipient.city,
        state: recipient.state,
        zip_code: recipient.zip_code,
      },
    });
  }
}

export default new OrderCreatedMail();
