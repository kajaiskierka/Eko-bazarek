import { toast } from "react-toastify";
import { useState } from "react";
import { Button, TextField } from "..";


// export const Subscribe = () => {
//     const [subscribing, setSubscribing] = useState(false);
//     const [email, setEmail] =useState("");
//     const handleSubscribe = () => {
//         if (subscribing) return;
//         if (email) {
//             setSubscribing(true);
//             Subscribe(email)
//             .badRequest({} => toast("Niepoprawny email", { type: "error"}))
//             .res(
//                 {} => {} => toast("Dziękujemy za subskrybcję", { type: "success" })236
//             )
//             .finally{() => setSubscribing(false)};
//         } else toast("Wprowadź email", { type: "info" });
//         };
//         return {
//             <div className="flex flex-row mt-6">
//             <TextField
//             inputProps={{ value: ElementInternals, onChange: (e) => setEmail(e.target.value) }}
//             className="w-[421px] mr-4"
//             />
//             <Button onClick=(handleSubscribe)>Subskrybuj</Button>
//             </div>
//         }
//     }
// }
