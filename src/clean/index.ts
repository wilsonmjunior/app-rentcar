import React from "react";

interface CreateProps {
  date: Date;
  user_id: string;
  message: string;
  emailNotify: boolean;
}

interface UserParams {
  id: string;
  name: string;
  isSubscribed: boolean;
}

class Notifications {
  static async create(data: CreateProps) {
    // create
  }
}

class Notification {
  static async save() {
    // save
  }

  static async create({ email }: { email: string }) {
    return {
      save: async () => {
        // create
      }
    }
  }
}

class User {
  static async findByPk(id: string) {
    return { } as UserParams;
  }

  static async create({ email }: { email: string; }) {
    return {
      save: async () => {
        const data = email;
      },
    }
  }
}

function Aula1 () {
  const createNotification = async (user: UserParams, message: string) => {
    await Notifications.create({
      date: new Date(),
      user_id: user.id,
      message,
      emailNotify: user.isSubscribed,
    })
  }

  async function notifyUsers(userIds: UserParams[], message: string) {
    userIds.forEach(async ({ id: userId }) => {
      const user = await User.findByPk(userId);
      await createNotification(user, message);
    })
  }
}

function Aula2 () {
  const isCurrency = (price: string) => {
    const currencies = ['BRL', 'USD', 'EUR'];
    const findCurrencyPrice = currencies.find(currency => price.includes(currency));
    return !!findCurrencyPrice;
  }

  const checkCurrencyType = (price: string) => {
    const currencies = ['BRL', 'USD', 'EUR'];
    const findCurrencyPrice = currencies.find(currency => price.includes(currency));
    return findCurrencyPrice;
  }
}

function Aula3 () {
  const createUser = async (email: string) => {
    const user = await User.create({ email });
    await user.save();
  }

  const createNotification = async (email: string) => {
    const notification = await Notification.create({ email });
    await notification.save();
  }

  const loginSignup = (email: string) => {
    const date = new Date();
    console.log(date, 'signed up', email);
  }

  async function signupUser(email: string) {
    await createUser(email);
    await createNotification(email);
    loginSignup(email);
  }
}
