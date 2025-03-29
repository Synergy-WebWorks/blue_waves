import { get_term_by_id_thunk, update_term_thunk } from '@/app/redux/term-thunk';
import store from '@/app/store/store';
import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TermsConditionSection from './terms-condition-section';
import Wysiwyg from '@/app/pages/components/wysiwyg';

export default function UpdateTermsConditionSection() {
    const { term } = useSelector((state) => state.terms);
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({ content: "" });
    const id = 1

    useEffect(() => {
        if (term?.content) {
            console.log("Fetched Term Data:", term.content); // Debugging
            setForm({ content: term.content || "" });
        }
    }, [term]);

    const submitTermsCondition = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await store.dispatch(update_term_thunk({
                id: 1,
                content: form.content
            }));
            await store.dispatch(get_term_by_id_thunk(id))
            message.success("Successfully Updated!");
        } catch (error) {
            message.error("Failed to update Terms & Conditions. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    console.log('term', term.content)

    return (
        <div className="mt-4 p-4 border rounded-lg shadow-lg">
            {/* <TermsConditionSection data={term} /> */}

            <div className="w-full mt-5 mb-5 px-6 md:px-12 lg:px-20">
                {/* Terms Condition Section */}

                {/* Form for Updating Terms */}
                <form onSubmit={submitTermsCondition}>
                    <div className="flex flex-col mt-6">
                        <label htmlFor="contact_content" className="block text-sm font-medium text-cyan-600">
                            Terms & Conditions Content
                        </label>
                        <Wysiwyg
                            onChange={(value) => {// Log the content value from WYSIWYG editor
                                setForm({
                                    ...form,
                                    content: value,  // Use the correct value from the WYSIWYG editor
                                });
                            }}
                            value={form.content}  // Bind the value to the form state
                            name="emailContent"
                        />

                        <div className="mt-20 flex justify-end">
                            <button
                                type="submit"
                                className="rounded-md bg-cyan-700 px-6 py-3 text-sm font-semibold text-white hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                disabled={loading}
                            >
                                {loading ? 'Saving...' : 'Save Changes'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
