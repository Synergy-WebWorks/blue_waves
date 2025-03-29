import React, { useEffect } from "react";
import UpdateTermsConditionSection from "./sections/update-terms-condition-section";
import store from "@/app/store/store";
import { get_term_by_id_thunk, get_term_thunk } from "@/app/redux/term-thunk";
import StaffLayout from "../layout";

export default function TermsAndConditionPage() {
    const id = 1
    useEffect(() => {
        const fetchTerm = async () => {
            await store.dispatch(get_term_by_id_thunk(id));
        };
        fetchTerm();
    }, []);
    return (
        <StaffLayout>
            <UpdateTermsConditionSection />
        </StaffLayout>
    );
}
