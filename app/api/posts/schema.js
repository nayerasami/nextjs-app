import { z } from "zod";

const schema = z.object({
    title: z.string().min(5),
    description: z.string().max(2000),
})

export default schema;