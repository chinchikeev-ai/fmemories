import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Бесплатно",
    price: "0",
    period: "навсегда",
    description: "Идеально для начала",
    features: [
      "До 20 членов семьи в древе",
      "Базовые напоминания",
      "1 ГБ хранилища",
      "Экспорт в PDF",
    ],
    cta: "Начать бесплатно",
    popular: false,
  },
  {
    name: "Премиум",
    price: "399",
    period: "в месяц",
    description: "Для серьёзных исследователей",
    features: [
      "Неограниченное древо",
      "ИИ-поиск по фотографиям",
      "Умные поздравления от ИИ",
      "10 ГБ хранилища",
      "Приоритетная поддержка",
      "Без рекламы",
    ],
    cta: "Попробовать Премиум",
    popular: true,
  },
  {
    name: "Семейный",
    price: "999",
    period: "в месяц",
    description: "До 10 аккаунтов для семьи",
    features: [
      "Всё из Премиум",
      "10 аккаунтов для семьи",
      "50 ГБ хранилища",
      "Совместное редактирование",
      "Семейный чат",
      "Расширенная статистика",
    ],
    cta: "Выбрать Семейный",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden bg-muted/20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-pink/10 via-transparent to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-radial from-mint/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Тарифы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Простые и честные <span className="gradient-text-accent">цены</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Начните бесплатно, переходите на платный тариф когда будете готовы
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink to-gold text-primary-foreground text-sm font-semibold shadow-lg">
                    <Star className="w-4 h-4" />
                    Популярный
                  </span>
                </div>
              )}

              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className={`h-full rounded-3xl p-8 ${
                  plan.popular
                    ? "bg-gradient-to-br from-primary/5 via-card to-card border-2 border-primary/20 shadow-glow"
                    : "glass-card-strong"
                }`}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-extrabold text-foreground">{plan.price}</span>
                    <span className="text-xl text-muted-foreground">₽</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? "bg-primary" : "bg-mint"
                      }`}>
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 text-lg font-semibold ${
                    plan.popular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-muted hover:bg-muted/80 text-foreground"
                  }`}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-mint" />
            <span>Отмена в любой момент</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-mint" />
            <span>14 дней бесплатного периода</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-mint" />
            <span>Гарантия возврата денег</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;