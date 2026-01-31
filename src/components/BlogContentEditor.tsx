import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface ContentSection {
    heading: string;
    content: string;
}

interface BlogContentEditorProps {
    introduction: string;
    sections: ContentSection[];
    conclusion: string;
    onIntroductionChange: (value: string) => void;
    onSectionsChange: (sections: ContentSection[]) => void;
    onConclusionChange: (value: string) => void;
}

const quillModules = {
    toolbar: [
        [{ 'header': [2, 3, 4, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link'],
        ['clean']
    ],
};

const quillFormats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link'
];

export const BlogContentEditor: React.FC<BlogContentEditorProps> = ({
    introduction,
    sections,
    conclusion,
    onIntroductionChange,
    onSectionsChange,
    onConclusionChange
}) => {
    const addSection = () => {
        onSectionsChange([...sections, { heading: '', content: '' }]);
    };

    const updateSection = (index: number, field: 'heading' | 'content', value: string) => {
        const updated = [...sections];
        updated[index][field] = value;
        onSectionsChange(updated);
    };

    const removeSection = (index: number) => {
        onSectionsChange(sections.filter((_, i) => i !== index));
    };

    const moveSection = (index: number, direction: 'up' | 'down') => {
        if (direction === 'up' && index > 0) {
            const updated = [...sections];
            [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
            onSectionsChange(updated);
        } else if (direction === 'down' && index < sections.length - 1) {
            const updated = [...sections];
            [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
            onSectionsChange(updated);
        }
    };

    return (
        <div className="content-editor">
            <div className="editor-section-block">
                <h3 className="editor-section-title">📝 Introduction</h3>
                <ReactQuill
                    theme="snow"
                    value={introduction}
                    onChange={onIntroductionChange}
                    modules={quillModules}
                    formats={quillFormats}
                    placeholder="Write an engaging introduction..."
                />
            </div>

            <div className="editor-section-block">
                <div className="section-header">
                    <h3 className="editor-section-title">📚 Content Sections</h3>
                    <button type="button" onClick={addSection} className="add-section-btn">
                        + Add Section
                    </button>
                </div>

                {sections.map((section, index) => (
                    <div key={index} className="dynamic-section">
                        <div className="section-controls">
                            <span className="section-number">Section {index + 1}</span>
                            <div className="section-actions">
                                <button
                                    type="button"
                                    onClick={() => moveSection(index, 'up')}
                                    disabled={index === 0}
                                    className="move-btn"
                                    title="Move Up"
                                >
                                    ↑
                                </button>
                                <button
                                    type="button"
                                    onClick={() => moveSection(index, 'down')}
                                    disabled={index === sections.length - 1}
                                    className="move-btn"
                                    title="Move Down"
                                >
                                    ↓
                                </button>
                                <button
                                    type="button"
                                    onClick={() => removeSection(index)}
                                    className="remove-btn"
                                    title="Remove Section"
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        <input
                            type="text"
                            value={section.heading}
                            onChange={(e) => updateSection(index, 'heading', e.target.value)}
                            placeholder="Section Heading"
                            className="section-heading-input"
                        />

                        <ReactQuill
                            theme="snow"
                            value={section.content}
                            onChange={(value) => updateSection(index, 'content', value)}
                            modules={quillModules}
                            formats={quillFormats}
                            placeholder="Write section content..."
                        />
                    </div>
                ))}

                {sections.length === 0 && (
                    <p className="empty-state">No sections yet. Click "Add Section" to create one.</p>
                )}
            </div>

            <div className="editor-section-block">
                <h3 className="editor-section-title">🎯 Conclusion</h3>
                <ReactQuill
                    theme="snow"
                    value={conclusion}
                    onChange={onConclusionChange}
                    modules={quillModules}
                    formats={quillFormats}
                    placeholder="Write a compelling conclusion..."
                />
            </div>

            <div className="editor-info-box">
                <strong>ℹ️ Auto-Generated Components:</strong>
                <p>The following will be automatically added to your blog post:</p>
                <ul>
                    <li>Product Showcase (inserted after 2nd section)</li>
                    <li>Author Bio (at the end)</li>
                    <li>CTA Section (at the end)</li>
                    <li>Random Unsplash Images (if not specified)</li>
                </ul>
            </div>
        </div>
    );
};
