import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json();
    const { email } = body;

    // Subscribe to email list
    const response = await fetch(
        "https://connect.mailerlite.com/api/subscribers",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNDdlMGMwOGEzNWQzZWEwNTQ0NmNkMjY2ZTY2OTI3MjU4NWM0M2NiZWViNTMzMzlkMTdlMzMyMzI3YjdiNDg1NDZlZTk4OGU1YmJjODBlYjEiLCJpYXQiOjE3NTQ0NTgwNjYuNjcyNzIyLCJuYmYiOjE3NTQ0NTgwNjYuNjcyNzI0LCJleHAiOjQ5MTAxMzE2NjYuNjY4NjA0LCJzdWIiOiIxNzI5OTU5Iiwic2NvcGVzIjpbXX0.voZ5Cn7rFaNrtsZ-i4ou0aqbxvUncDc69ixDifTRZJ0zxt55GlIogX6ntuOytMxNDBnZI4RUAf9-G70j81uMI5CgATzeeuz9cXq5H3tJfDmRoctGj-VxC5EogRXwiD0ep6k8BXRJ64HDAphZegMZCvqCJd8L3WImf3MguEDwgkPJsyhz5ITpuB9n0BwoIV7_TJd_TVj27bU_GNnX745LELe6pS0hDcpS0m2KUSOC63XSXxIM6fdp_oMWByU8hEY-4LWSqFTBW6GwHjo3Nmej7w7b7bapCGPUt-ZfUA3vj0EBxqceaLVlK_adbQ8Mxgt4j3Xi0rjE-nNj0qAF02aFlUPqRkx6ZI6RPxkrAYLo0ee23KE00P49ZmVmi0BkbdH8CTvyXm2hQIyWOmQrwsinOsxCCQNHQlE2nhb8nuo_NCHrXr5JGr7Ww1XfJ9slA2Jr9QOgCRqm3rjhymgAKAi4_8VtQgUszCN6QrafcihL1gPIL47a2TupRDEBQf_khxViq0ktJfAcYcGU6Z0jEs-Flbj5XEO5aPvDGkIrRNNDMjnwZbQ1iFkiR5x5TS0RYlSOvzaU86n_b0rH018qJIjbkrMUECSsWaguoDkr1mayGVNnd9yI-KnMjx0u2qgKC-d3TYLFt3QnX79O642rkWJ_RdEUdhPBMuJYWTLKMkSTW-8`,
            },
            body: JSON.stringify({ email }),
        }
    );
     
    const data = await response.json();
    return NextResponse.json({ active: data.active });
}